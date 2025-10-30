import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const Navbar = () => {
  const { count } = useCart();
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 20px",
      background: "linear-gradient(180deg, rgba(17,24,39,0.9), rgba(17,24,39,0.8))",
      color: "var(--text)",
      backdropFilter: "saturate(140%) blur(8px)",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      zIndex: 1000
    },
    brand: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontWeight: 800,
      fontSize: 18,
      textDecoration: "none",
      color: "var(--text)"
    },
    nav: {
      display: "flex",
      alignItems: "center",
      gap: 16
    },
    link: {
      color: "var(--muted)",
      textDecoration: "none",
      fontSize: 14
    },
    searchWrapper: {
      flex: 1,
      maxWidth: 400,
      margin: "0 20px"
    },
    searchInput: {
      width: "100%",
      padding: "8px 12px",
      borderRadius: 10,
      border: "1px solid #27324a",
      background: "#0f172a",
      color: "var(--text)",
      outline: "none"
    },
    cta: {
      background: "var(--primary)",
      color: "#ffffff",
      border: "none",
      padding: "10px 12px",
      borderRadius: 10,
      cursor: "pointer",
      fontWeight: 700
    }
  };

  return (
    <header style={styles.container}>
      <Link to="/" style={styles.brand}>
        <span>ShopMate</span>
      </Link>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/cart" style={styles.link}>Cart{count > 0 ? ` (${count})` : ""}</Link>
      </nav>
      <div style={styles.searchWrapper}>
        <input type="text" placeholder="Search products..." style={styles.searchInput} />
      </div>
      <Link to="/cart" style={{ ...styles.cta, textDecoration: "none" }}>Cart{count > 0 ? ` (${count})` : ""}</Link>
    </header>
  );
};

export default Navbar;