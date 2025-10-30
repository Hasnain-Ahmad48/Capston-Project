import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const styles = {
    wrap: { maxWidth: 1000, margin: "24px auto", padding: "0 20px", textAlign: "center" },
    title: { fontSize: 28, fontWeight: 800, marginBottom: 8 },
    btn: { background: "#111827", color: "#fff", border: "none", padding: "10px 14px", borderRadius: 8, cursor: "pointer", fontWeight: 700, textDecoration: "none", display: "inline-block" }
  };
  return (
    <main style={styles.wrap}>
      <h1 style={styles.title}>Page not found</h1>
      <p style={{ color: "#6b7280", marginBottom: 16 }}>The page you requested does not exist.</p>
      <Link to="/" style={styles.btn}>Go home</Link>
    </main>
  );
};

export default NotFound;
