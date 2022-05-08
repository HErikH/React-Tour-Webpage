import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArtstation } from "@fortawesome/free-brands-svg-icons";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "./UI/button/Button";

function Navbar() {
  let [click, setClick] = useState(false)
  let [button, setButton] = useState(true)

  function closeMobileMenu() {
      setClick(false)
  }
  function showButton() {
      if (window.innerWidth <= 960) {
          setButton(false)
      } else {
          setButton(true)
      }
    }
    
  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
          TRVL
          <FontAwesomeIcon icon={faArtstation} className="fa-artstation"/>
        </Link>
        <div className="menu-icon" onClick={() => setClick(!click)}>
        <FontAwesomeIcon
          className={click ? 'fa-times' : 'fa-bars'}
          icon={click ? faTimes : faBars}
        />
        </div>
        <ul className={click ? "nav-menu nav-menu_active" : "nav-menu"}>
          <li className="nav__item">
            <Link
              to="/"
              className="nav__links"
              onClick={closeMobileMenu}>
                  Home
              </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/services"
              className="nav__links"
              onClick={closeMobileMenu}>
                  Services
              </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/products"
              className="nav__links"
              onClick={closeMobileMenu}>
                  Products
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/sign-up"
              className="nav__links-mobile"
              onClick={closeMobileMenu}>
                  Sign Up
              </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn_outline'>SIGN UP</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
