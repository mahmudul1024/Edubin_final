import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Pdf from "react-to-pdf";
import { FaFilePdf } from "react-icons/fa";

const ref = React.createRef();

const CourseDetails = () => {
  const details = useLoaderData();

  const navigate = useNavigate();

  const handlePremium = () => {
    navigate("/checkout");
  };

  return (
    <section>
      <div className="container items-center px-4  pb-2 mx-auto text-center lg:pb-5 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900 inline  ">
          {details.title}
        </h1>

        <Pdf
          targetRef={ref}
          filename="course-details"
          x={0.5}
          y={0.5}
          scale={0.65}
        >
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              type="button"
              className=" bg-orange-400 px-4 py-2 rounded-full text-grey-800  font-semibold "
            >
              Download Details{" "}
              <span className=" inline-block ml-2 ">
                <FaFilePdf></FaFilePdf>
              </span>
            </button>
          )}
        </Pdf>
      </div>
      <div ref={ref} className="dark:bg-violet-400">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56  md:px-10 lg:px-32 dark:text-gray-900">
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
            {details.description}
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
            >
              Get started
            </button>
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
            >
              Learn more
            </button>
          </div>
        </div>
        <img
          src={details.image}
          alt=""
          className="w-1/3  mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
        />
      </div>

      <div className=" text-center mb-5">
        <button
          onClick={handlePremium}
          type="button"
          className=" bg-orange-400 px-4 py-2 rounded-full text-grey-800  font-semibold   "
        >
          Get Premium Access
        </button>
      </div>
    </section>
  );
};

export default CourseDetails;
