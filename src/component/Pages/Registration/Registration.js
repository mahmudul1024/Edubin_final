import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { userContext } from "../../../Authprovider/Authprovider";

const Registration = () => {
  const [user, userError, setuserError] = useState("");
  const { createUser, updateUser } = useContext(userContext);

  const handleUpdate = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUser(profile)
      .then(() => {})
      .catch((er) => {
        toast.error(er.message);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    console.log(email, password, name, photoURL);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUpdate(name, photoURL);
        // setuserError("");
      })
      .catch((er) => {
        // setuserError(er.message);
        toast.error(userError);
      });
  };
  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-yellow-400 my-5 dark:text-gray-100 mx-auto">
      <h2 className="mb-3 text-3xl font-semibold text-center">Sign Up Now</h2>
      <p className="text-sm text-center dark:text-gray-400">
        Already have an account?
        <Link
          to="/login"
          rel="noopener noreferrer"
          className="focus:underline hover:underline"
        >
          Sign In here
        </Link>
      </p>

      <form
        onSubmit={handleSubmit}
        noValidate=""
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block dark:text-gray-400">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-700 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-400">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-700 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="photoURL" className="block dark:text-gray-400">
            photoURL
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder="photoURL"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-700 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-700 focus:dark:border-violet-400"
          />
        </div>
        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-violet-400 border bg-amber-200 rounded-lg  ">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Registration;
