import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo .png";

const Navbar = () => {
  return (
    <nav >
      
        <NavLink className="navLogo" to="/">
          <img src={Logo} alt="Little Lemon Logo" />
        </NavLink>

          <div className="navLinks">
            <NavLink className="navLinks-item" to="/">
              HOME
            </NavLink>
            
            <NavLink className="navLinks-item" to="/menu">
              MENU
            </NavLink>
            <NavLink className="navLinks-item" to="/reserve">
              RESERVATIONS
            </NavLink>
          </div>
      
    </nav>
  );
};

export default Navbar;
