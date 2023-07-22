import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-background p-3 sticky-top">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Trending Movies</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                Cart Items
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
