import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <section className="py-8 ">
        <div className="container mx-auto">
          <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl  ">
            <h2 className="text-2xl font-bold leading-none sm:text-4xl">
              Learn without limits
            </h2>
            <p className="px-8 my-4">
              Start, switch, or advance your career with more than 5,200
              courses, Professional Certificates, and degrees from world-class
              universities and companies.
            </p>
          </div>
          <div className="grid grid-cols-5 p-4 ">
            <div className="flex flex-wrap  justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
              {courses.map((course) => {
                return (
                  <button
                    key={course._id}
                    className="p-2 rounded   md:border-b-0 md:py-3 dark:border-gray-300 bg-amber-300 m-2 w-full  dark:text-gray-400 "
                  >
                    <p>
                      {" "}
                      <Link to={`/courses/${course._id}`}>{course.title}</Link>
                    </p>
                  </button>
                );
              })}
            </div>
            <div className="grid gap-5 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
              {courses.map((course) => {
                return (
                  <div
                    className="flex flex-col items-center justify-center  border rounded p-2"
                    key={course._id}
                  >
                    <img
                      src={course.image}
                      alt=""
                      style={{ height: 200, width: 200, borderRadius: 10 }}
                    />
                    <h5 className="text-xl font-semibold">
                      Est facilisis necessitatibus ea
                    </h5>
                    <p>Ex audiam inermis elaboraret eam, ora</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
