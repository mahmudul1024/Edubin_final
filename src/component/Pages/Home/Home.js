import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 ">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src="https://miro.medium.com/max/1400/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg"
          alt=""
          className="w-full h-60 sm:h-96 bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
          <div className="space-y-2">
            <Link
              rel="noopener noreferrer"
              to="#"
              className="inline-block text-2xl font-semibold sm:text-3xl text-white"
            >
              Most Popular Programming Languages to Learn in 2023
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
