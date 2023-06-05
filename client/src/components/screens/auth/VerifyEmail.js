import React from "react";
import { Link, NavLink } from "react-router-dom";

const VerifyEmail = () => {
  return (
    <div>
      <p>A link was sent to your mail for verification </p>
      <p>Make sure you verify your mail, It would be used to log in</p>
      <Link to={"/signin"}>SignIn</Link>
    </div>
  );
};

export default VerifyEmail;
