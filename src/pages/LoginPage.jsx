import React, { useContext, useRef, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthProvider";

// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import app from "../firebase/firebase.config";

// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

const LoginPage = () => {
  const { signInUser } = useContext(AuthContext);
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSuccess("");
    // setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user);
    //     if (userCredential.user.emailVerified) {
    //       setSuccess("Login Successfully ");
    //     } else {
    //       alert("Please Verify your email address");
    //     }

    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // setError(errorMessage);
    //     setError(errorMessage);
    //     console.log(errorMessage);
    //   });
  };
  // const emailRef = useRef(null);

  // const handleResetPass = () => {
  //   const email = emailRef.current.value;

  //   if (!email) {
  //     console.log("email daw");
  //     return;
  //   } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email))
  //     console.log("please give me valid email");

  //   sendPasswordResetEmail(auth, email)
  //     .then((result) => {
  //       // Password reset email sent!
  //       alert("please cheak your email");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //       // ..
  //     });
  // };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div>
              <p>login with google Account</p>
              <button
                onClick={handleSubmit}
                className="border border-blue-500 p-3 "
              >
                Google
              </button>
            </div>
            {/* {error && <p className="text-red-500">{error}</p>}
            {success && <p>{success}</p>} */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p>
            new to this site? Please{" "}
            <Link to="/register">
              {" "}
              <button className="btn btn-link">Register</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
