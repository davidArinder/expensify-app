import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest // gives access to all the other props to use isAuthenticated and component by themselves
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? ( // render component if user authenticated
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" /> // redirect to '/' is user not authenticated
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
