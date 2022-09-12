import React from "react";

const CartDetailsShow = ({ state, dispatch }) => {
  return (
    <>
      <div className="bg-white md:col-span-4  border p-5 rounded-md shadow-sm">
        <div className="flex items-center gap-x-2 mb-4">
          <p className="font-bold text-indigo-700">Totlal Items:</p>
          <p>{state.itemsCounter}</p>
        </div>
        <div className="flex items-center gap-x-1 mb-10">
          <p className="font-bold text-indigo-700">Totlal Payments:</p>
          <span>
            {state.total}
            <span>$</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="border px-3 py-1 rounded-md text-white bg-red-700 shadow-md"
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            Clear
          </button>
          <button
            type="button"
            className="border px-3 py-1 rounded-md text-white bg-green-700 shadow-md"
            onClick={() => dispatch({ type: "CHECKOUT" })}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDetailsShow;
