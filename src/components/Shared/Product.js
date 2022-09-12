import React, { useContext } from "react";
// react router dom
import { Link } from "react-router-dom";
// react icons
import {
  BsFillPlusSquareFill,
  BsFillFileMinusFill,
  BsFillTrashFill,
} from "react-icons/bs";
// helper functions
import { Shorts } from "../../helpers/Shorts";
import { IsInCart } from "./../../helpers/IsInCart";
import { quantityCount } from "./../../helpers/quantityCount";
// context provider
import { CartContex } from "../../context/CartProvider";

const Product = ({ products }) => {
  const { state, dispatch } = useContext(CartContex);
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md border border-gray-200 col-span-12 md:col-span-6 lg:col-span-4">
      <div className="w-[200px] h-[200px] overflow-hidden mx-auto my-3">
        <img
          src={products.image}
          alt={products.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-5">
        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
          {Shorts(products.title)}
        </h5>
        <p className="mb-5 font-normal text-gray-700">
          <span className="font-bold">Price:</span> {products.price} $
        </p>
        <div className="flex items-center justify-between">
          <Link
            to={`/products/${products.id}`}
            className="py-1 px-2 text-sm font-medium text-center border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white transition-colors duration-200 rounded-md"
          >
            Read More
          </Link>
          {IsInCart(state, products.id) ? (
            <div className="flex items-center gap-x-2">
              {quantityCount(state, products.id) > 1 && (
                <button type="button">
                  <BsFillFileMinusFill
                    className="text-blue-700 text-2xl cursor-pointer"
                    onClick={() =>
                      dispatch({ type: "DECREASE", payload: products })
                    }
                  />
                </button>
              )}
              {quantityCount(state, products.id) === 1 && (
                <button type="button">
                  <BsFillTrashFill
                    className="text-white text-2xl w-7 h-6 p-1 rounded-sm bg-blue-700 cursor-pointer"
                    onClick={() =>
                      dispatch({ type: "REMOVE_ITEM", payload: products })
                    }
                  />
                </button>
              )}
              <span className="bg-gray-100 px-4 py-1 rounded-md select-none">
                {quantityCount(state, products.id)}
              </span>
              <button type="button">
                <BsFillPlusSquareFill
                  className="text-blue-700 text-2xl cursor-pointer"
                  onClick={() =>
                    dispatch({ type: "INCREASE", payload: products })
                  }
                />
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="bg-blue-800 text-white py-1 px-3 rounded-md"
              onClick={() => dispatch({ type: "ADD_ITEM", payload: products })}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
