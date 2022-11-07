import edubinlogo from "../Assets/Images/logo.jpg";
import { FaUserAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { userContext } from "../../Authprovider/Authprovider";
import { useContext } from "react";
import { toastSuccess } from "../../Others/Toaster";

const Header = () => {
  const { user, logOut } = useContext(userContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("theme-light");

  const handleLogout = () => {
    logOut()
      .then(() => {
        toastSuccess();
      })
      .catch((er) => {
        console.error(er.message);
      });
  };

  const handletoggle = () => {
    theme === "theme-light" ? setTheme("theme-dark") : setTheme("theme-light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="bg-violet-400 px-4">
      <div className="px-4  py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center ">
            <Link
              to="/"
              aria-label="Edubin "
              title="Edubin"
              className="inline-flex items-center mr-8"
            >
              <img
                src={edubinlogo}
                alt=""
                height={40}
                width={50}
                className="rounded-circle "
              />

              <h2 className="ml-4 text-xl font-bold tracking-wide text-gray-100 uppercase ">
                Edubin
              </h2>
            </Link>
            <ul className="flex items-center  hidden space-x-8 lg:flex">
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "greenyellow" : "white",
                  })}
                  to="/"
                  aria-label="Our product"
                  title="Our product "
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 "
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "greenyellow" : "white",
                  })}
                  to="/courses"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "greenyellow" : "white",
                  })}
                  to="/faq"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Faq
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "greenyellow" : "white",
                  })}
                  to="/blog"
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Blog
                </NavLink>
              </li>

              {/* toggle */}

              <label
                htmlFor="Toggle1"
                className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
              >
                <span>Left</span>
                <span className="relative">
                  <input
                    onClick={handletoggle}
                    id="Toggle1"
                    type="checkbox"
                    className="hidden peer"
                  />
                  <div className="w-10 h-6 rounded-full  peer-checked: bg-white "></div>
                  <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0  peer-checked:left-auto bg-yellow-300 "></div>
                </span>
                <span>Right</span>
              </label>
            </ul>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {user?.uid ? (
              <>
                <li>
                  <button
                    onClick={handleLogout}
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    title="Log out"
                  >
                    Log Out
                  </button>
                </li>

                {/* profile pic */}
                <li>
                  <Link
                    to="/"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    title={user.displayName}
                  >
                    <FaUserAlt className="  fs-4 " />
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    aria-label="Sign in"
                    title="Sign in"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Sign in
                  </Link>
                </li>

                <li>
                  <Link
                    to="/register"
                    aria-label="Sign Up"
                    title="Sign Up"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Edubin"
                        title="Edubin"
                        className="inline-flex items-center"
                      >
                        <img
                          src={edubinlogo}
                          alt=""
                          height={40}
                          width={50}
                          className="rounded-circle "
                        />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Edubin
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <label
                        htmlFor="Toggle2"
                        className="inline-flex items-center space-x-4 cursor-pointer text-black-100"
                      >
                        <span>Left</span>
                        <span className="relative">
                          <input
                            onClick={handletoggle}
                            id="Toggle2"
                            type="checkbox"
                            className="hidden peer"
                          />
                          {/* box inside */}
                          <div className="w-10 h-6 rounded-full  peer-checked: bg-black "></div>
                          {/* round ball */}
                          <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0  peer-checked:left-auto bg-yellow-300 "></div>
                        </span>
                        <span>Right</span>
                      </label>
                      <li>
                        <Link
                          to="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses"
                          aria-label="Courses"
                          title="Courses"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          aria-label="Faq"
                          title="Faq"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Faq
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Blog"
                          title="Blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                      {/* toggle */}

                      {user?.uid ? (
                        <>
                          <li>
                            <button
                              onClick={handleLogout}
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              title="Sign up"
                            >
                              Log Out
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link
                              to="/login"
                              aria-label="Sign in"
                              title="Sign in"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Sign in
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/register"
                              aria-label="Sign Up"
                              title="Sign Up"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Sign Up
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
