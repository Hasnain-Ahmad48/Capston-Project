import React from "react";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../constant.jsx";

const Products = () => {
  const styles = {
    wrap: { maxWidth: 1200, margin: "0 auto", padding: "24px 20px" },
    header: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 },
    title: { fontSize: 22, fontWeight: 800 },
    grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }
  };

  return (
    <main style={styles.wrap}>
      <div style={styles.header}>
        <h1 style={styles.title}>Products</h1>
      </div>
      <div className="grid-3" style={styles.grid}>
        {products.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </main>
  );
};

export default Products;
