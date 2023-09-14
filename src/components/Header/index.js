import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  const navLinkStyle = ({ isActive }) => {
    if (isActive) {
      return styles.activeLink;
    }
    return styles.link;
  };
  return (
    <>
      <nav className={styles.headerContainer}>
        <NavLink className={navLinkStyle} to="/">
          Home
        </NavLink>
        <NavLink className={navLinkStyle} to="/about">
          About
        </NavLink>
        <NavLink className={navLinkStyle} to="/login">
          Login
        </NavLink>
      </nav>
    </>
  );
}

export default memo(Header);
