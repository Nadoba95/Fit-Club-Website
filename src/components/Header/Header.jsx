import { useState } from "react";
import { Link } from "react-scroll";

import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const mobile = window.innerWidth <= 768 ? true : false;

  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="header">
      <img className="logo" src={Logo} alt="Logo" />
      {mobile && !menuOpen ? (
        <div className="bars-container" onClick={openMenu}>
          <img className="bars" src={Bars} alt="bars" />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link to="home" smooth={true} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} onClick={closeMenu}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="reasons" smooth={true} onClick={closeMenu}>
              Why us
            </Link>
          </li>
          <li>
            <Link to="plans" smooth={true} onClick={closeMenu}>
              Plans
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} onClick={closeMenu}>
              Testimonial
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
