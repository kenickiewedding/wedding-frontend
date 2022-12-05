import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [showNav, setShowNav] = useState("false");
  const className = showNav ? "show navbar" : "navbar";
  return (
    <div className={className}>
      <Link exact to="/" className={pathname === "/" && "active"}>
        Home
      </Link>
      <NavLink to="/save-the-date">Share Your Contact Info</NavLink>
      <NavLink to="/FAQ">FAQ</NavLink>
      <NavLink to="/Travel">Travel</NavLink>
    </div>
  );
};

export default Navbar;
