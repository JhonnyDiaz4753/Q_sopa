import { useState } from "react";
import "./ProductCard.css";
import ProductModal from "../Productmodal/Productmodal";
import { getProductById, getIngredientsByProduct } from "../../services/api";

export default function ProductCard({ id, title, price, image, badge }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [ingredients, setIngredients] = useState(null); // null = no cargado aún
  const [description, setDescription] = useState(null);
  const [loadingExtras, setLoadingExtras] = useState(false);

  // Los datos base SIEMPRE vienen de las props — nunca desaparecen
  const baseProduct = { id, name: title, price, image, badge };

  const handleOpenModal = () => {
    setModalOpen(true);

    // Si ya cargamos ingredientes/descripción no repetimos
    if (ingredients !== null) return;

    setLoadingExtras(true);

    Promise.all([
      getProductById(id),
      getIngredientsByProduct(id),
    ])
      .then(([productData, ingredientsData]) => {
        setDescription(productData.description ?? "");
        setIngredients(ingredientsData ?? []);
      })
      .catch(() => {
        setDescription("");
        setIngredients([]);
      })
      .finally(() => setLoadingExtras(false));
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
        <ProductModal
          product={{ ...baseProduct, description, ingredients: ingredients ?? [] }}
          loading={loadingExtras}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}