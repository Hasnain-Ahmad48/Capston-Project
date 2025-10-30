import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Button as MUIButton} from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import NotFound from "./pages/NotFound.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider>
      <Navbar />
      <div style={{height: 60}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
