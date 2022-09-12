import React, { useContext } from "react";
import {
  BsFillFileMinusFill,
  BsFillPlusSquareFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { Shorts } from "../../helpers/Shorts";
import { CartContex } from "./../../context/CartProvider";

const CartItem = ({ cartdata }) => {
  const { dispatch } = useContext(CartContex);

  return (
    <div className="bg-white md:col-span-8  border p-5 shadow-sm rounded-md flex items-center justify-between">
      <img src={cartdata.image} alt={cartdata.title} className="w-[100px]" />
      <div className="flex flex-col">
        <h5 className="font-bold text-indigo-600">{Shorts(cartdata.title)}</h5>
        <p className="inline-flex items-center gap-1">
          <span>{cartdata.price}</span>$
        </p>
      </div>
      <div className="bg-orange-500 rounded-md px-3 py-2 text-white">
        {cartdata.quantity}
      </div>
      <div className="flex items-center gap-x-2">
        {cartdata.quantity > 1 ? (
          <button type="button">
            <BsFillFileMinusFill
              className="text-blue-700 text-2xl cursor-pointer"
              onClick={() => dispatch({ type: "DECREASE", payload: cartdata })}
            />
          </button>
        ) : (
          <button type="button">
            <BsFillTrashFill
              className="text-white text-2xl w-7 h-6 p-1 rounded-sm bg-blue-700 cursor-pointer"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: cartdata })
              }
            />
          </button>
        )}
        <button type="button">
          <BsFillPlusSquareFill
            className="text-blue-700 text-2xl cursor-pointer"
            onClick={() => dispatch({ type: "INCREASE", payload: cartdata })}
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
