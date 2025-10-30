import React from "react";
import { useCart } from "../context/CartContext.jsx";

const Cart = () => {
  const { items, updateQty, removeItem, clear, subtotal } = useCart();

  const styles = {
    wrap: { maxWidth: 1100, margin: "0 auto", padding: "24px 20px", display: "grid", gap: 16 },
    title: { fontSize: 22, fontWeight: 800 },
    row: { display: "grid", gridTemplateColumns: "auto 1fr auto auto", gap: 12, alignItems: "center", borderBottom: "1px solid #2a3550", padding: "10px 0" },
    img: { width: 72, height: 72, objectFit: "cover", borderRadius: 8, background: "#111827" },
    name: { fontWeight: 700 },
    sub: { color: "#9ca3af", fontSize: 14 },
    qtyInput: { width: 56, padding: "6px 8px", borderRadius: 8, border: "1px solid #2a3550", background: "#0f172a", color: "var(--text)" },
    remove: { background: "transparent", border: "1px solid #ef4444", color: "#ef4444", padding: "6px 10px", borderRadius: 10, cursor: "pointer" },
    summary: { marginTop: 8, display: "flex", alignItems: "center", justifyContent: "space-between" },
    clear: { background: "transparent", border: "1px solid var(--primary)", color: "var(--text)", padding: "8px 12px", borderRadius: 10, cursor: "pointer", fontWeight: 700 },
    checkout: { background: "var(--primary)", color: "#fff", border: "none", padding: "10px 14px", borderRadius: 10, cursor: "pointer", fontWeight: 700 }
  };

  return (
    <main style={styles.wrap}>
      <h1 style={styles.title}>Your Cart</h1>
      {items.length === 0 ? (
        <p style={{ color: "#9ca3af" }}>Your cart is empty.</p>
      ) : (
        <>
          {items.map((it) => (
            <div style={styles.row} key={it.id}>
              <img src={it.image} alt={it.title} style={styles.img} />
              <div>
                <div style={styles.name}>{it.title}</div>
                <div style={styles.sub}>${it.price} each</div>
              </div>
              <input
                type="number"
                min={1}
                value={it.qty}
                onChange={(e) => updateQty(it.id, Number(e.target.value))}
                style={styles.qtyInput}
              />
              <button onClick={() => removeItem(it.id)} style={styles.remove}>Remove</button>
            </div>
          ))}
          <div style={styles.summary}>
            <button onClick={clear} style={styles.clear}>Clear cart</button>
            <div style={{ fontWeight: 800 }}>Subtotal: ${subtotal.toFixed(2)}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button style={styles.checkout}>Checkout</button>
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;
