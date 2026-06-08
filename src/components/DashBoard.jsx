import React from "react";
import AuthHOC from "./AuthHOC";

const DashBoard = ({ login, logout }) => {
  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AuthHOC(DashBoard);
