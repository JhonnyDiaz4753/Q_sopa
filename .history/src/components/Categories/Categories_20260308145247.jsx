import "./Categories.css";
import { useState, useEffect } from "react";
import { getCategorias } from "../../services/api";

export default function Categories({ onCategoryChange }) {
  const [active, setActive] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    getCategorias()
      .then((data) => {
        setCategories(data);
        setActive(data[0]?.name);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Cierra el drawer con la tecla Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleClick = (name) => {
    setActive(name);
    onCategoryChange?.(name);
    setDrawerOpen(false); // cierra el drawer al seleccionar
  };

  if (loading) return <p className="categories-status">Cargando...</p>;
  if (error)   return <p className="categories-status error">{error}</p>;

  return (
    <>
      {/* ── DESKTOP: menú horizontal ── */}
      <div className="categories-wrapper">
        <div className="categories-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-btn ${active === cat.name ? "active" : ""}`}
              onClick={() => handleClick(cat.name)}
            >
              <div className="category-icon">
                <span className="material-symbols-outlined">{cat.icon}</span>
              </div>
              <span className="category-label">{cat.name}</span>
              <div className="category-underline" />
            </button>
          ))}
        </div>
      </div>

      {/* ── MOBILE: botón hamburguesa ── */}
      <button
        className="drawer-toggle"
        onClick={() => setDrawerOpen(true)}
        aria-label="Abrir menú de categorías"
      >
        <span />
        <span />
        <span />
      </button>

      {/* ── MOBILE: overlay ── */}
      <div
        className={`drawer-overlay ${drawerOpen ? "open" : ""}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* ── MOBILE: panel lateral ── */}
      <nav className={`drawer-panel ${drawerOpen ? "open" : ""}`}>
        <span className="drawer-title">Categorías</span>

        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`drawer-item ${active === cat.name ? "active" : ""}`}
            onClick={() => handleClick(cat.name)}
          >
            <div className="drawer-item-icon">
              <span className="material-symbols-outlined">{cat.icon}</span>
            </div>
            <span className="drawer-item-label">{cat.name}</span>
            <div className="drawer-item-dot" />
          </button>
        ))}
      </nav>
    </>
  );
}