// import React, { useContext, useState } from "react";

// import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
// import { Link, useNavigate } from "react-router";
// import { AuthContext } from "../Context/AuthProvider";
// import { updateProfile } from "firebase/auth";

// const Register = () => {
//   const { createUser } = useContext(AuthContext);
//   const [error, setError] = useState();
//   const [success, setSuccess] = useState();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setError("");
//     setSuccess("");

//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     createUser(email, password)
//       .then((result) => {
//         setSuccess("user Create Done");
//         e.target.reset();
//         navigate("/");
//         console.log(result.user);

//         updateProfile(result.user, {
//           displayName: name,
//         })
//           .then(() => {
//             console.log("     Profile updated!");
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       })
//       .catch((error) => {
//         setError("error khyse re");
//         console.log(error);
//       });
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex flex-col items-center">
//         <div>
//           <h1 className="text-5xl font-bold">Register now!</h1>
//         </div>

//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <form onSubmit={handleSubmit} className="card-body w-[350px]">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Your name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="name"
//                 className="input input-bordered"
//                 name="name"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="email"
//                 className="input input-bordered"
//                 name="email"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <div className="relative w-full">
//                 <input
//                   type="password"
//                   placeholder="password"
//                   className="input input-bordered w-full pr-10"
//                   name="password"
//                   required
//                 />
//               </div>
//             </div>
//             {error && <p>{error}</p>}
//             {success && <p>{success}</p>}
//             <div className="form-control mt-6">
//               <button className="btn btn-primary">Register</button>
//             </div>
//           </form>
//           <p className="ml-4">
//             Already have an account? Please
//             <Link to="/login">
//               <button className="btn btn-link">Login</button>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useContext, useState } from "react";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Function to get meaningful error message
  const getErrorMessage = (error) => {
    switch (error.code) {
      case "auth/email-already-in-use":
        return "This email is already registered. Please try logging in or use a different email.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/weak-password":
        return "Password should be at least 6 characters long.";
      case "auth/operation-not-allowed":
        return "Email/password accounts are not enabled. Please contact support.";
      case "auth/network-request-failed":
        return "Network error. Please check your internet connection.";
      case "auth/too-many-requests":
        return "Too many unsuccessful attempts. Please try again later.";
      default:
        return "An error occurred during registration. Please try again.";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    // Basic validation
    if (!name) {
      setError("Please enter your name.");
      return;
    }

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please enter a password.");
      return;
    }

    // Password validation - FIXED VERSION
    // Firebase minimum is 6 characters, but we'll enforce stronger security
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Optional: Strong password validation (comment out if you want only 6 characters minimum)
    const strongPasswordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!strongPasswordRegex.test(password)) {
      setError(
        "For better security, use at least 8 characters with both letters and numbers."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        setSuccess("Account created successfully! Redirecting...");

        // Update user profile with name
        updateProfile(result.user, {
          displayName: name,
        })
          .then(() => {
            console.log("Profile updated successfully!");
            e.target.reset();

            // Navigate after a short delay to show success message
            setTimeout(() => {
              navigate("/");
            }, 1500);
          })
          .catch((error) => {
            console.error("Profile update error:", error);
            // Still show success but with a warning
            setSuccess(
              "Account created! You can update your name later in profile settings."
            );
            setTimeout(() => {
              navigate("/");
            }, 2000);
          });
      })
      .catch((error) => {
        const errorMessage = getErrorMessage(error);
        setError(errorMessage);
        console.error("Registration error:", error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Register now!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
                <span className="label-text-alt text-xs">
                  Minimum 6 characters (8+ recommended)
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="input input-bordered w-full pr-10"
                  name="password"
                  required
                  minLength="6"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                </button>
              </div>
            </div>

            {/* Error and Success Messages */}
            {error && (
              <div className="alert alert-error mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
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
                <span className="text-sm">{error}</span>
              </div>
            )}

            {success && (
              <div className="alert alert-success mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
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
                <span className="text-sm">{success}</span>
              </div>
            )}

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Create Account
              </button>
            </div>
          </form>

          <div className="text-center p-4">
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/login" className="btn btn-link p-0 text-primary">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
