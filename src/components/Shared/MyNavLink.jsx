import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
        to={to}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyNavLink;
