import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 2000);
    };

    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50 transition-all duration-700">
          <div className="relative text-6xl sm:text-7xl font-bold tracking-widest animate-pulse">
            <span className="animate-scaleUp">S</span>
            <span className="animate-scaleUp delay-200">W</span>
          </div>
          <p className="text-gray-400 text-sm mt-4 tracking-widest animate-fadeIn">
            SHOPWAVE
          </p>
        </div>
      ) : (
        <div className="px-4 lg:px-[5vw] fade-in-slow">
          <div className="px-1">
            <Navbar />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
