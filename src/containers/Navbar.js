import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { pathname } = useLocation();
  const [showNav, setShowNav] = useState(false);
  const className = showNav ? "show navbar" : "navbar";
  const toggleNav = () => setShowNav(!showNav);
  return (
    <div className="navbar-container">
      <FontAwesomeIcon icon={faBars} onClick={toggleNav} />
      <div className={className}>
        <Link exact to="/" className={pathname === "/" && "active"}>
          Home
        </Link>
        <NavLink to="/save-the-date">Share Your Contact Info</NavLink>
        <NavLink to="/FAQ">FAQ</NavLink>
        <NavLink to="/Travel">Travel</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
