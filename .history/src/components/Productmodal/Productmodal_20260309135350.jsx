import { useEffect } from "react";
import "./ProductModal.css";

export default function ProductModal({ product, loading, onClose }) {
  // Cierra con Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Bloquea scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!product) return null;

  const ingredients = product.ingredients ?? [];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>

        {/* ── Botón cerrar ── */}
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* ── Imagen ── */}
        <div className="modal-image-wrapper">
          <img src={product.image} alt={product.name} className="modal-image" />
          {product.badge && (
            <span className="modal-badge">{product.badge}</span>
          )}
        </div>

        {/* ── Cuerpo ── */}
        <div className="modal-body">

          {/* Nombre + precio */}
          <div className="modal-header-info">
            <h2 className="modal-title">{product.name}</h2>
            <span className="modal-price">${product.price}</span>
          </div>

          {/* Descripción */}
          {product.description && (
            <div className="modal-section">
              <h4 className="modal-section-title">
                <span className="material-symbols-outlined">description</span>
                Descripción
              </h4>
              <p className="modal-description">{product.description}</p>
            </div>
          )}

          {/* Ingredientes */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <span className="material-symbols-outlined">grocery</span>
              Ingredientes
            </h4>

            {/* Skeleton mientras carga */}
            {loading && (
              <ul className="modal-ingredients">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="modal-ingredient-skeleton" />
                ))}
              </ul>
            )}

            {/* Sin ingredientes */}
            {!loading && ingredients.length === 0 && (
              <p className="modal-empty-ingredients">Sin ingredientes registrados.</p>
            )}

            {/* Lista real */}
            {!loading && ingredients.length > 0 && (
              <ul className="modal-ingredients">
                {ingredients.map((ing, i) => (
                  <li key={i} className="modal-ingredient-item">
                    <span className="ingredient-dot" />
                    {typeof ing === "string" ? ing : ing.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}