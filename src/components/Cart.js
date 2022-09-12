import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContex } from "../context/CartProvider";
import CartDetailsShow from "./Shared/CartDetailsShow";
import CartItem from "./Shared/CartItem";

const Cart = () => {
  const { state, dispatch } = useContext(CartContex);
  return (
    <div className="container mt-10 grid grid-cols-12 items-start gap-5">
      {state.selectedItems.map((item) => {
        return <CartItem key={item.id} cartdata={item} />;
      })}
      {state.itemsCounter > 0 && (
        <CartDetailsShow state={state} dispatch={dispatch} />
      )}
      {state.checkout && (
        <>
          <p className="col-span-12 text-center text-3xl">
            Your payment has been successfully completed
          </p>
          <Link
            to="/products"
            className="col-span-12 text-xl text-center mt-10 text-indigo-700 underline"
          >
            Buy More
          </Link>
        </>
      )}

      {!state.checkout && state.itemsCounter === 0 && (
        <>
          <p className="col-span-12 text-center text-3xl">
            The shopping cart is empty!
          </p>
          <Link
            to="/products"
            className="col-span-12 text-xl text-center mt-10 text-indigo-700 underline"
          >
            Buy More
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
