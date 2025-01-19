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
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col items-center">
        <div>
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body w-[350px]">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
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
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* {error && <p className="text-red-500">{error}</p>}
            {success && <p>{success}</p>} */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="ms-8">
            Don't have an account? Please
            <Link to="/register">
              <button className="btn btn-link">Register</button>
            </Link>
          </p>

          <div>
            <div className="flex items-center">
              <div className="flex-grow ml-4 h-px bg-gray-300"></div>
              <span className="mx-4 text-gray-500 font-semibold">
                Contact with
              </span>
              <div className="flex-grow mr-4 h-px bg-gray-300"></div>
            </div>
            <div className="flex justify-center mt-4 mb-10">
              <button onClick={handleSubmit} className="">
                <img className="w-[30px]" src={googleicon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
