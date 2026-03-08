import "./Categories.css";
import { useState, useEffect  } from "react";
import { getCategorias } from "../../services/api";

export default function Categories({ onCategoryChange }) {
  const [active, setActive] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCategorias()
      .then((data) => {
        setCategories(data);
        setActive(data[0]?.name); // activa la primera por defecto
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleClick = (name) => {
    setActive(name);
    onCategoryChange?.(name); // notifica al padre si lo necesita
  };

  if (loading) return <p className="categories-status">Cargando...</p>;
  if (error) return <p className="categories-status error">{error}</p>;

  return (
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
  );
}