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
        <Link
          to="/"
          onClick={() => setShowNav(false)}
          className={pathname === "/" ? "active" : ""}
        >
          Home
        </Link>
        <NavLink onClick={() => setShowNav(false)} to="/Travel">
          Travel
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} to="/Pictures">
          Pictures
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} to="/Registry">
          Registry
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} to="/RSVP">
          RSVP
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} to="/FAQ">
          FAQ
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} to="/save-the-date">
          Share Your Contact Info
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
