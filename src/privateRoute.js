import React from "react";
import { Route, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.jsx";
import Login from "layouts/Login/Login.jsx";
export default function PrivateRoute({
  component: Component,
  authenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <AdminLayout {...props} {...rest} />
        ) : (
          <Login  {...props} {...rest}    />
        )
      }
    />
  );
}
