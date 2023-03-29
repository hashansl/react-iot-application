import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VscRadioTower } from "react-icons/vsc";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../button/Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import { AmplifySignOut } from "@aws-amplify/ui-react";

function Navbar() {
  // added by me below props should come from home
  const [loggedIn] = useState(true);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClck = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <VscRadioTower className="navbar-icon" />
              SMART IoT
            </Link>
            <div className="menu-icon" onClick={handleClck}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <>
              {loggedIn ? (
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/status"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Status
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/devices"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Devices
                    </Link>
                  </li>

                  <li className="nav-btn">
                    {button ? (
                      // <Link to="/sign-up" className="btn-link">
                      //   <Button buttonStyle="btn--outline">SIGN UP</Button>
                      // </Link>
                      <div className="btn-link">
                        <AmplifySignOut />
                      </div>
                    ) : (
                      <div className="btn-link">
                        <AmplifySignOut />
                      </div>
                      // <Link
                      //   to="/sign-up"
                      //   className="btn-link"
                      //   onClick={closeMobileMenu}
                      // >
                      //   <Button buttonStyle="btn--outline" buttonSize="btn-mobile">
                      //     SIGN UP
                      //   </Button>
                      // </Link>
                    )}
                  </li>
                </ul>
              ) : (
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-btn">
                    {button ? (
                      <Link to="/sign-up" className="btn-link">
                        <Button buttonStyle="btn--outline">SIGN UP</Button>
                      </Link>
                    ) : (
                      <Link
                        to="/signin"
                        className="btn-link"
                        onClick={closeMobileMenu}
                      >
                        <Button
                          buttonStyle="btn--outline"
                          buttonSize="btn-mobile"
                        >
                          SIGN IN
                        </Button>
                      </Link>
                    )}
                  </li>
                </ul>
              )}
            </>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
