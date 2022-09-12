import React from "react";
import Store from "./components/Store";
import DataProvider from "./context/DataProvider";
import { Route, Routes, Navigate } from "react-router-dom";
import DeteailsProduct from "./components/DeteailsProduct";
import CartProvider from "./context/CartProvider";
import Navbar from "./components/Shared/Navbar";
import Cart from "./components/Cart";
const App = () => {
  return (
    <DataProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Store />} />
          <Route path="/products/:id" element={<DeteailsProduct />} />
          {/* <Route path="/" element={<Navigate to="/products" />} /> */}
        </Routes>
      </CartProvider>
    </DataProvider>
  );
};

export default App;
