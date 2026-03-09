import "./Navbar.css";
import logo from "../../assets/logo_Q-spoa.jpg";
import Categories from "../Categories/Categories";
import { useTheme } from "../../hooks/Usetheme";

export default function Navbar({ onCategoryChange, onLogoClick }) {
  const { theme, toggle } = useTheme();

  const toggleBtn = (
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
  );

  return (
    <header className="navbar-wrapper">
      <div className="navbar">

        {/* Izquierda: logo + toggle (en móvil el toggle va aquí) */}
        <div className="navbar-left">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo"
            onClick={onLogoClick}
            title="Volver al inicio"
          />
          {/* Toggle visible solo en móvil */}
          <span className="theme-toggle-mobile">{toggleBtn}</span>
        </div>

        {/* Centro: categorías */}
        <div className="navbar-center">
          <Categories onCategoryChange={onCategoryChange} />
        </div>

        {/* Derecha: toggle visible solo en desktop */}
        <div className="navbar-right">
          {toggleBtn}
        </div>

      </div>
    </header>
  );
}