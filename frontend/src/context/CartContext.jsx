import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]); // {id, title, price, image, qty}

  const addItem = (product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((it) => it.id === product.id);
      if (existing) {
        return prev.map((it) => (it.id === product.id ? { ...it, qty: it.qty + qty } : it));
      }
      return [...prev, { id: product.id, title: product.title, price: product.price, image: product.image, qty }];
    });
  };

  const removeItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  const updateQty = (id, qty) => setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, qty) } : it)));

  const clear = () => setItems([]);

  const count = useMemo(() => items.reduce((sum, it) => sum + it.qty, 0), [items]);
  const subtotal = useMemo(() => items.reduce((sum, it) => sum + it.price * it.qty, 0), [items]);

  const value = { items, addItem, removeItem, updateQty, clear, count, subtotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
