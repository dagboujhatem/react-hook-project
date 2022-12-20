import React, { useContext } from "react";
import AuthContext from "../../Context/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  // useContext take one params (Context pointer: is the const exported from the file)
  const contextData = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {contextData?.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {contextData?.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {contextData?.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
