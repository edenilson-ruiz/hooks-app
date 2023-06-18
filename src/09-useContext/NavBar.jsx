import { NavLink } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

export const NavBar = () => {


    const { hola } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          useContext {hola}
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                HomePage
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                LoginPage
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
