import Logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="Logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonial</li>
      </ul>
    </div>
  );
}

export default Header;
