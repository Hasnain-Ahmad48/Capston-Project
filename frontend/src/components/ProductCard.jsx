import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const styles = {
    card: { border: "1px solid #2a3550", borderRadius: 12, overflow: "hidden", background: "#0f172a", color: "var(--text)", display: "grid" },
    img: { width: "100%", height: 180, objectFit: "cover", display: "block", background: "#111827" },
    body: { padding: 12, display: "grid", gap: 6 },
    title: { fontWeight: 700 },
    sub: { color: "#9ca3af", fontSize: 14 },
    row: { display: "flex", alignItems: "center", justifyContent: "space-between" },
    price: { fontWeight: 800, color: "#ffffff" },
    btn: { border: "1px solid var(--primary)", background: "transparent", color: "var(--text)", borderRadius: 10, padding: "6px 10px", cursor: "pointer", fontWeight: 700 }
  };

  return (
    <article style={styles.card}>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} style={styles.img} />
      </Link>
      <div style={styles.body}>
        <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <div style={styles.title}>{product.title}</div>
        </Link>
        <div style={styles.sub}>{product.category}</div>
        <div style={styles.row}>
          <span style={styles.price}>${product.price}</span>
          <button style={styles.btn} onClick={() => addItem(product, 1)}>Add to cart</button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
