import React from "react";

const Faq = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details open="">
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              what is cors?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Cross-origin resource sharing is a mechanism that allows
                restricted resources on a web page to be requested from another
                domain outside the domain from which the first resource was
                served. A web page may freely embed cross-origin images,
                stylesheets, scripts, iframes, and videos.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </summary>
            <div className="px-4 pb-4">
              <p>
                it allows real-time database connection, which means multiple
                users can see the changes in the data when the data gets created
                or edited. Data transmission is handled with web sockets so you
                don't have to send requests to get new data, you only need to
                subscribe once. Auth0, MongoDB, Passport, Okta, and Firebase are
                the most popular alternatives and competitors to Firebase
                Authentication.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How does the private route work?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                The private route component is similar to the public route, the
                only change is that redirect URL and authenticate condition. If
                the user is not authenticated he will be redirected to the login
                page and the user can only access the authenticated routes If he
                is authenticated (Logged in).
              </p>
              <p>
                Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus
                autem eaque unde possimus quae.
              </p>
              {/* What is Node? How does Node work? */}
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is Node? How does Node work?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                The private route component is similar to the public route, the
                only change is that redirect URL and authenticate condition. If
                the user is not authenticated he will be redirected to the login
                page and the user can only access the authenticated routes If he
                is authenticated (Logged in).
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
