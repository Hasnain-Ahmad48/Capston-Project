import React from "react";

const Footer = () => {
  const styles = {
    wrap: { marginTop: 24, background: "linear-gradient(180deg, rgba(17,24,39,0.95), rgba(17,24,39,1))", color: "var(--text)" },
    inner: { maxWidth: 1200, margin: "0 auto", padding: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" },
    brand: { fontWeight: 800 },
    small: { color: "var(--muted)", fontSize: 13 }
  };
  return (
    <footer style={styles.wrap}>
      <div style={styles.inner}>
        <div style={styles.brand}>ShopMate</div>
        <div style={styles.small}>© {new Date().getFullYear()} ShopMate. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
