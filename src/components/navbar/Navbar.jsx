import "./Navbar.css";
import logo from "../../assets/logo_Q-spoa.jpg"; // coloca tu imagen aquí
import Categories from "../Categories/Categories";
export default function Navbar() {
  return (
   <header className="navbar-wrapper">
      
      <div className="navbar">
        
        {/* Logo */}
        <div className="navbar-left">
          <img src={logo} alt="Burger Bistro Logo" className="navbar-logo" />
        </div>

        {/* Categorías centradas */}
        <div className="navbar-center">
          <Categories />
        </div>

      </div>

    </header>
  );
}