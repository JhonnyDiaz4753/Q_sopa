import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import ProductCard from "../components/ProductCard/ProductCard";
import LogoSplash from "../components/LogoSplash/LogoSplash";
import { getProductsByCategory } from "../services/api";
import "./Menu.css";

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeCategoryId, setActiveCategoryId] = useState(null); // null = sin categoría

  const handleCategoryChange = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  // Al hacer clic en el logo volvemos al estado inicial
  const handleLogoClick = () => {
    setActiveCategoryId(null);
    setProducts([]);
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
      <Navbar
        onCategoryChange={handleCategoryChange}
        onLogoClick={handleLogoClick}
      />

      <main className="menu-container">
        <header className="menu-header">
          <span className="menu-subtitle">Bienvenido. Elige y disfruta.</span>
<h2>¡Bienvenido a Nuestro Menú!</h2>
<p>Nos alegra tenerte aquí. Esperamos que disfrutes cada una de nuestras opciones.</p>
        </header>

        {/* Sin categoría → LogoSplash */}
        {activeCategoryId === null && <LogoSplash />}

        {/* Cargando */}
        {activeCategoryId !== null && loading && (
          <div className="menu-loading">
            <span className="menu-spinner" />
            <p>Cargando productos...</p>
          </div>
        )}

        {/* Error */}
        {activeCategoryId !== null && !loading && error && (
          <p className="menu-error">⚠️ {error}</p>
        )}

        {/* Vacío */}
        {activeCategoryId !== null && !loading && !error && products.length === 0 && (
          <p className="menu-empty">No hay productos en esta categoría.</p>
        )}

        {/* Productos */}
        {activeCategoryId !== null && !loading && !error && products.length > 0 && (
          <section className="products-grid">
            {products.map((product) => (
              
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.name}
                price={product.price}
                image={product.imageUrl}
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