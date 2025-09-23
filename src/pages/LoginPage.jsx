// import React, { useContext, useRef, useState } from "react";
// import auth from "../firebase/firebase.config";
// import {
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { Link, useNavigate } from "react-router";
// import { AuthContext } from "../Context/AuthProvider";
// import googleicon from "../assets/search.png";

// const LoginPage = () => {
//   const { signInUser, signInWithGoogle } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [error, setError] = useState();
//   const [success, setSuccess] = useState();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     signInUser(email, password)
//       .then((result) => {
//         console.log(result.user);

//         setSuccess("Login done");
//         e.target.reset();
//         navigate("/");
//       })
//       .catch((error) => {
//         setError("error khyse re");
//         console.log(error);
//       });
//   };

//   const handleGoogleSign = () => {
//     signInWithGoogle()
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex flex-col items-center">
//         <div>
//           <h1 className="text-5xl font-bold">Login now!</h1>
//         </div>

//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <form onSubmit={handleSubmit} className="card-body w-[350px]">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="email"
//                 className="input input-bordered"
//                 name="email"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="password"
//                 className="input input-bordered"
//                 name="password"
//               />
//               <label className="label">
//                 <a href="#" className="label-text-alt link link-hover">
//                   Forgot password?
//                 </a>
//               </label>
//             </div>

//             {error && <p className="text-red-500">{error}</p>}
//             {success && <p>{success}</p>}
//             <div className="form-control mt-6">
//               <button className="btn btn-primary">Login</button>
//             </div>
//           </form>
//           <p className="ms-8">
//             Don't have an account? Please
//             <Link to="/register">
//               <button className="btn btn-link">Register</button>
//             </Link>
//           </p>

//           <div>
//             <div className="flex items-center">
//               <div className="flex-grow ml-4 h-px bg-gray-300"></div>
//               <span className="mx-4 text-gray-500 font-semibold">
//                 Contact with
//               </span>
//               <div className="flex-grow mr-4 h-px bg-gray-300"></div>
//             </div>
//             <div className="flex justify-center mt-4 mb-10">
//               <button onClick={handleGoogleSign} className="">
//                 <img className="w-[30px]" src={googleicon} alt="" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useContext, useRef, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import googleicon from "../assets/search.png";

const LoginPage = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Firebase error codes to meaningful English messages
  const getErrorMessage = (errorCode) => {
    const errorMessages = {
      // Common Authentication Errors
      "auth/invalid-email":
        "Invalid email address format. Please check your email.",
      "auth/user-disabled":
        "This user account has been disabled. Please contact support.",
      "auth/user-not-found":
        "No account found with this email address. Please check your email or register.",
      "auth/wrong-password": "Incorrect password. Please try again.",
      "auth/invalid-credential":
        "The provided login information is incorrect or expired.",

      // Network Errors
      "auth/network-request-failed":
        "Network error. Please check your internet connection and try again.",
      "auth/too-many-requests":
        "Too many unsuccessful login attempts. Please try again in a few minutes.",

      // Google Sign-In Errors
      "auth/popup-closed-by-user": "Sign-in was cancelled. Please try again.",
      "auth/popup-blocked":
        "Sign-in popup was blocked by your browser. Please allow popups for this site.",
      "auth/unauthorized-domain": "This domain is not authorized for sign-in.",

      // General Errors
      "auth/operation-not-allowed":
        "This sign-in method is not allowed. Please contact support.",
      "auth/weak-password": "Password should be at least 6 characters long.",
      "auth/email-already-in-use":
        "This email is already registered. Please login instead.",
      "auth/requires-recent-login":
        "Please log in again to perform this action.",

      // Default error
      default: "An unexpected error occurred. Please try again.",
    };

    return errorMessages[errorCode] || errorMessages["default"];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // Password length validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      await signInUser(email, password);
      setSuccess("Login successful! Redirecting to homepage...");
      e.target.reset();

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.log("Login error:", error);
      const errorMessage = getErrorMessage(error.code);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSign = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await signInWithGoogle();
      setSuccess("Google sign-in successful! Redirecting...");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.log("Google sign-in error:", error);
      const errorMessage = getErrorMessage(error.code);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Forgot password functionality
  const handleForgotPassword = async () => {
    const email = prompt(
      "Please enter your email address to reset your password:"
    );

    if (!email) return;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert(
        "Password reset email sent! Please check your inbox and spam folder."
      );
    } catch (error) {
      const errorMessage = getErrorMessage(error.code);
      alert(`Error: ${errorMessage}`);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-2">Login now!</h1>
          <p className="text-lg text-gray-600">Welcome back to our platform</p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-6">
          <form onSubmit={handleSubmit} className="card-body w-[350px]">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered input-primary"
                name="email"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered input-primary"
                name="password"
                required
                minLength={6}
                autoComplete="current-password"
              />
              <label className="label">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="label-text-alt link link-hover text-blue-600 font-medium"
                >
                  Forgot password?
                </button>
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="alert alert-error shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-medium">{error}</span>
                </div>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="alert alert-success shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-medium">{success}</span>
                </div>
              </div>
            )}

            <div className="form-control mt-6">
              <button
                className={`btn btn-primary ${loading ? "loading" : ""}`}
                disabled={loading}
                type="submit"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          <div className="px-8 pb-6">
            <p className="text-center mb-4 text-gray-600">
              Don't have an account?{" "}
              <Link to="/register">
                <button className="btn btn-link p-1 text-primary font-semibold">
                  Register here
                </button>
              </Link>
            </p>

            <div className="divider">OR</div>

            <div className="flex flex-col items-center space-y-4">
              <span className="text-gray-500 font-semibold">Continue with</span>

              <button
                onClick={handleGoogleSign}
                className="btn btn-outline btn-wide gap-3"
                disabled={loading}
                type="button"
              >
                <img className="w-5 h-5" src={googleicon} alt="Google" />
                {loading ? "Signing in..." : "Google"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
