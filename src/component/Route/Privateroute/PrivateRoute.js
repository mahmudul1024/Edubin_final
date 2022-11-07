import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Authprovider, { userContext } from "../../../Authprovider/Authprovider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(userContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      </div>
    );
  }

  if (user?.uid) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default PrivateRoute;
