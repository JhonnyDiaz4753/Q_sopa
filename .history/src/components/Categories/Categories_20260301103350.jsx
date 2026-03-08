import "./Categories.css";
import { useState } from "react";

export default function Categories() {
  const [active, setActive] = useState("Hamburguesas");

  const categories = [
    { name: "Hamburguesas", icon: "lunch_dining" },
    { name: "Perros", icon: "hot_tub" },
    { name: "Acompañantes", icon: "tapas" },
    { name: "Bebidas", icon: "local_bar" },
    { name: "Combos", icon: "stars" },
  ];

  return (
    <div className="categories-wrapper">
      <div className="categories-container">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`category-btn ${
              active === cat.name ? "active" : ""
            }`}
            onClick={() => setActive(cat.name)}
          >
            <div className="category-icon">
              <span className="material-symbols-outlined">
                {cat.icon}
              </span>
            </div>
            <span className="category-label">{cat.name}</span>
            <div className="category-underline" />
          </button>
        ))}
      </div>
    </div>
  );
}