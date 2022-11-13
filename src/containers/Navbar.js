import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/save-the-date">Let Us Know How To Reach You</NavLink>
    </div>
  );
};

export default Navbar;
