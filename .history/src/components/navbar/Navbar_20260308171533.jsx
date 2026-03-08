import "./Navbar.css";
import logo from "../../assets/logo_Q-spoa.jpg";
import Categories from "../Categories/Categories";

export default function Navbar({ onCategoryChange }) {
  return (
    <header className="navbar-wrapper">
      <div className="navbar">

        {/* Logo */}
        <div className="navbar-left">
          
          <img src={logo} alt="Burger Bistro Logo" className="navbar-logo" />
    
        </div>

        {/* Categorías — recibe el callback y lo pasa hacia abajo */}
        <div className="navbar-center">
          <Categories onCategoryChange={onCategoryChange} />
        </div>

      </div>
    </header>
  );
}