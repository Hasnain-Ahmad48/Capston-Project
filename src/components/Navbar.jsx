import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 20px",
      backgroundColor: "#111827",
      color: "#ffffff",
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
      fontWeight: 700,
      fontSize: 18,
      textDecoration: "none",
      color: "#ffffff"
    },
    nav: {
      display: "flex",
      alignItems: "center",
      gap: 16
    },
    link: {
      color: "#e5e7eb",
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
      borderRadius: 6,
      border: "1px solid #374151",
      background: "#1f2937",
      color: "#ffffff",
      outline: "none"
    },
    cta: {
      background: "#2563eb",
      color: "#ffffff",
      border: "none",
      padding: "8px 12px",
      borderRadius: 6,
      cursor: "pointer"
    }
  };

  return (
    <header style={styles.container}>
      <Link to="/" style={styles.brand}>
        <span>ShopMate</span>
      </Link>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </nav>
      <div style={styles.searchWrapper}>
        <input type="text" placeholder="Search products..." style={styles.searchInput} />
      </div>
      <button style={styles.cta}>Cart</button>
    </header>
  );
};

export default Navbar;