import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest // gives access to all the other props to use isAuthenticated and component by themselves
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? (
        <Redirect to="/dashboard" /> // redirect to '/dashboard' is user authenticated
      ) : (
        <Component {...props} /> // redirect if user not authenticated
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
