import "./Navbar.css";
import logo from "../../assets/logo_Q-spoa.jpg";
import Categories from "../Categories/Categories";
import { service } from "../../service/useTheme";

export default function Navbar({ onCategoryChange }) {
  const { theme, toggle } = useTheme();

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
         {/* Toggle tema */}
        <div className="navbar-right">
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label="Cambiar tema"
            title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
          >
            <span className="material-symbols-outlined">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}