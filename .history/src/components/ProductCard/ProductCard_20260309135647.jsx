import { useState } from "react";
import "./ProductCard.css";
import ProductModal from "../ProductModal/ProductModal";
import { getProductById } from "../../services/products";

export default function ProductCard({ title, price, image, badge, id }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);

    // Si ya tenemos los datos no volvemos a pedir
    if (product) return;

    setLoading(true);
    getProductById(id)
      .then((data) => setProduct(data))
      .catch(() => {
        // Si falla, construimos un objeto básico con lo que ya tenemos
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

      {/* Modal */}
      {modalOpen && (
        <ProductModal
          product={loading ? { name: title, price, image, badge, ingredients: [], description: "" } : product}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}