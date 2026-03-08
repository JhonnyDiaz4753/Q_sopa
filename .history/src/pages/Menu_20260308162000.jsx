import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import ProductCard from "../components/ProductCard/ProductCard";
import { getProductsByCategory } from "../services/api";
import "./Menu.css";

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  // Se llama cada vez que cambia la categoría
  const handleCategoryChange = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  useEffect(() => {
    if (activeCategoryId === null) return;

    setLoading(true);
    setError(null);

    getProductsByCategory(activeCategoryId)
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [activeCategoryId]);

  return (
    <>
      {/* Navbar ya tiene Categories dentro, pasa el callback */}
      <Navbar onCategoryChange={handleCategoryChange} />

      <main className="menu-container">
        <header className="menu-header">
          <span className="menu-subtitle">Sabores Auténticos</span>
          <h2>Nuestro Menú</h2>
          <p>Ingredientes premium, preparados al momento.</p>
        </header>

        {/* Estados: cargando / error / productos */}
        {loading && (
          <div className="menu-loading">
            <span className="menu-spinner" />
            <p>Cargando productos...</p>
          </div>
        )}

        {error && (
          <p className="menu-error">⚠️ {error}</p>
        )}

        {!loading && !error && products.length === 0 && (
          <p className="menu-empty">No hay productos en esta categoría.</p>
        )}

        {!loading && !error && products.length > 0 && (
          <section className="products-grid">
            {products.map((product) => (
              console.log("Producto:", product), // Debug: Verificar estructura del producto  
              <ProductCard
                key={product.id}
                title={product.name}
                price={product.price}
                image={product.imge}
                badge={product.badge ?? null}
              />
            ))}
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}