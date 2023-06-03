import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : window.location.href = '/'
      }
    </Route>
  );
};

export default ProtectedRoute;
