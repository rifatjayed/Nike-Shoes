import React, { useContext, useState } from "react";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  console.log(createUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col items-center">
        <div>
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body w-[350px]">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative w-full">
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-full pr-10"
                  name="password"
                  required
                />
                {/* <span
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {show ? (
                    <BsEyeSlashFill></BsEyeSlashFill>
                  ) : (
                    <BsEyeFill></BsEyeFill>
                  )}
                </span> */}
              </div>
            </div>
            {/* {error && <p>{error}</p>}
            {success && <p>{success}</p>} */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="ml-4">
            Already have an account? Please
            <Link to="/login">
              <button className="btn btn-link">Login</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
