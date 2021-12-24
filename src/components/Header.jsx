import React from "react";
import { useNavigate,NavLink } from "react-router-dom";

const Header = () => {

const navigate = useNavigate()

const SeeVideos=()=>{
  navigate('/video')
}

const NavigationToContact = ()=>{
  navigate('/contact')
}


  return (
    <>
      <div className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <h1 to="/" className="logo">
              trydo
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/service">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/portfolio">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/team">
                    Team
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Testmonial
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="button">
              <button type="button" onClick={SeeVideos} className="btn" id="buy">
                  See Tutorials
                </button>
              </div>
            </div>
          </nav>
        </div>

        <div className="header-inner">
          <h1 className="display-1">Creative</h1>
          <p>
            There are many variations of passage of Lorem Ipsum but
            <br /> the majority have suffered alternation.
          </p>
          <button className="btn" onClick={NavigationToContact} id="conatct">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
