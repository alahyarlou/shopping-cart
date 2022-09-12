import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
// context provider
import { CartContex } from "../../context/CartProvider";

const Navbar = () => {
  const { state } = useContext(CartContex);
  return (
    <div className="bg-white p-5 shadow-md sticky top-0">
      <div className="container flex items-center justify-between">
        <Link to="/products" className="text-xl font-bold text-indigo-600">
          Products
        </Link>
        <div className="relative">
          <p className="absolute -top-2 -right-3 text-white bg-indigo-500 align-middle p-2 text-sm w-5 h-5 flex items-center justify-center  rounded-full">
            {state.itemsCounter}
          </p>
          <Link to="/cart">
            <FiShoppingCart className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
