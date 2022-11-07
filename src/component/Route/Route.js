import { createBrowserRouter } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./Privateroute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      // https://edubin1.vercel.app/
      {
        path: "/courses",
        loader: () => fetch("https://edubin1.vercel.app/courses"),
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        loader: ({ params }) =>
          fetch(`https://edubin1.vercel.app/courses/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
]);
