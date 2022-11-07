import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userContext } from "../../../Authprovider/Authprovider";

const Login = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();

  const { user, signIn, logIn, loading } = useContext(userContext);
  const [userError, setuserError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname;

  const handleGoogle = () => {
    signIn(googleAuthProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.uid) {
          navigate(from, { replace: true });
        } else {
          alert("Varify your email first");
        }
      })
      .catch((er) => {
        toast.error(er.message);
      });
  };
  const handleGit = () => {
    signIn(githubAuthProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.uid) {
          navigate(from, { replace: true });
        } else {
          alert("Varify your email first");
        }
      })
      .catch((er) => {
        toast.error(er.message);
      });
  };

  // login handler with email n pass
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        event.target.reset();
        if (user?.uid) {
          navigate(from, { replace: true });
        } else {
          toast.error("Create an account first");
        }
        setuserError("");
      })
      .catch((er) => {
        toast.error(er.message);
        setuserError(er.message);
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-yellow-400 my-5 dark:text-gray-100 mx-auto">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Login to your account
      </h2>
      <p className="text-sm text-center dark:text-gray-400">
        Dont have account?
        <Link
          to="/register"
          rel="noopener noreferrer"
          className="focus:underline hover:underline"
        >
          Sign up here
        </Link>
      </p>
      <div className="my-6 space-y-4">
        <button
          onClick={handleGoogle}
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Login with Google</p>
        </button>
        <button
          onClick={handleGit}
          aria-label="Login with GitHub"
          role="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
          </svg>
          <p>Login with GitHub</p>
        </button>
      </div>
      <form
        onSubmit={handleLogin}
        noValidate=""
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-400">
            Username
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-700 focus:border-violet-400"
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
          <div className="flex justify-end text-xs dark:text-gray-400">
            <Link rel="noopener noreferrer" to="#">
              Forgot Password?
            </Link>
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-violet-400">
          Sign in
        </button>
      </form>

      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Don't have an account?
        <Link
          rel="noopener noreferrer"
          to="#"
          className="underline dark:text-gray-100"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
