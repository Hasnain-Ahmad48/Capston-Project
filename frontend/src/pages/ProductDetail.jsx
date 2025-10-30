import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../constant.jsx";
import { useCart } from "../context/CartContext.jsx";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  if (!product) {
    return (
      <main style={{ maxWidth: 1000, margin: "24px auto", padding: "0 20px" }}>
        <h1 style={{ fontSize: 22, fontWeight: 800 }}>Product not found</h1>
      </main>
    );
  }

  const styles = {
    wrap: { maxWidth: 1100, margin: "0 auto", padding: "24px 20px" },
    grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" },
    img: { width: "100%", height: 360, objectFit: "cover", borderRadius: 12, background: "#f3f4f6" },
    title: { fontSize: 24, fontWeight: 800, marginBottom: 6 },
    price: { fontSize: 20, fontWeight: 800, margin: "8px 0" },
    btn: { background: "#111827", color: "#fff", border: "none", padding: "10px 14px", borderRadius: 8, cursor: "pointer", fontWeight: 700 }
  };

  return (
    <main style={styles.wrap}>
      <div style={styles.grid}>
        <img src={product.image} alt={product.title} style={styles.img} />
        <div>
          <h1 style={styles.title}>{product.title}</h1>
          <div style={{ color: "#6b7280" }}>{product.category}</div>
          <div style={styles.price}>${product.price}</div>
          <p style={{ color: "#4b5563", marginBottom: 16 }}>{product.description}</p>
          <button style={styles.btn} onClick={() => addItem(product, 1)}>Add to cart</button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
