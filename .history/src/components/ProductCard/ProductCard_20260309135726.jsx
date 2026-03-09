import "./ProductCard.css";

export default function ProductCard({ title, price, image, badge }) {
  return (
    <div className="product-card">

      {badge && <div className="badge">{badge}</div>}

      <img src={image} alt={title} />

      <div className="product-info">
        <h4>{title}</h4>
        <span>${price}</span>
      </div>

      <button className="product-btn">Ingredientes</button>
    </div>
  );
}