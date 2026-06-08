import React from "react";

const AuthHOC = (WrappedComponent) => {
  return function (props) {
    const login = () => {
     console.log('logged in')
    };
    const logout = () => {
      console.log("logout");
    };
    return (
      <WrappedComponent
        {...props}
        login={login}
        logout={logout}
      />
    );
  };
};

export default AuthHOC;
