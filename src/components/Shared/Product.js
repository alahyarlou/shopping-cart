import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillPlusSquareFill,
  BsFillFileMinusFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { Shorts } from "../helpers/Shorts";

const Product = ({ products }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-sm border border-gray-200 col-span-12 md:col-span-6 lg:col-span-4">
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
            to=""
            className="py-2 px-3 font-medium text-center border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white transition-colors duration-200 rounded-lg"
          >
            Read More
          </Link>
          {/* <button
            type="button"
            className="bg-blue-800 text-white py-2.5 px-3 rounded-md"
          >
            Add to cart
          </button> */}
          <div className="flex items-center gap-x-2">
            <BsFillFileMinusFill className="text-blue-700 text-2xl cursor-pointer" />
            {/* <BsFillTrashFill className="text-white text-2xl w-7 h-6 p-1 rounded-sm bg-blue-700 cursor-pointer" /> */}
            <span className="bg-gray-100 px-4 py-1 rounded-md">1</span>
            <BsFillPlusSquareFill className="text-blue-700 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
