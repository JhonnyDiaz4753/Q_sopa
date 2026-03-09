import { useState } from "react";
import "./ProductCard.css";
import ProductModal from "../ProductModal/ProductModal";
import { getProductById, getIngredientsByProduct } from "../../services/api";

export default function ProductCard({ id, title, price, image, badge }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);

    // Si ya cargamos los datos no repetimos la llamada
    if (product) return;

    setLoading(true);

    // Llamamos producto e ingredientes en paralelo
    Promise.all([
      getProductById(id),
      getIngredientsByProduct(id),
    ])
      .then(([productData, ingredientsData]) => {
        setProduct({ ...productData, ingredients: ingredientsData });
      })
      .catch(() => {
        // Fallback con datos básicos si algo falla
        setProduct({ id, name: title, price, image, badge, ingredients: [], description: "" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="product-card">
        {badge && <div className="badge">{badge}</div>}
        <img src={image} alt={title} />
        <div className="product-info">
          <h4>{title}</h4>
          <span>${price}</span>
        </div>
        <button className="product-btn" onClick={handleOpenModal}>
          Ingredientes
        </button>
      </div>

      {modalOpen && (
        console.log("Datos del producto:", product),
        <ProductModal
          product={
            loading
              ? { name: title, price, image, badge, ingredients: [], description: "" }
              : product
          }
          loading={loading}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}