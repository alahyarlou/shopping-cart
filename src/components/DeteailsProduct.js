import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
// context
import { ProductContext } from "../context/DataProvider";

const DeteailsProduct = () => {
  const { id } = useParams();
  const products = useContext(ProductContext);
  const product = products[id - 1];
  const { image, description, category, price, title, rating } = product;
  return (
    <div className="container my-10">
      <div className="bg-white shadow-md p-5 rounded-md border w-full lg:max-w-5xl mx-auto  grid grid-cols-12 items-center gap-x-10">
        <div className="col-span-10 w-[200px]  lg:w-[300px] mx-auto  md:col-span-5">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="col-span-10 md:col-span-7">
          <Link
            to="/products"
            className="my-4 text-green-600 inline-block text-3xl lg:text-4xl rounded-md "
          >
            <IoArrowBackCircleSharp />
          </Link>
          <h5 className="font-bold sm:text-2xl lg:text-4xl mb-4 text-indigo-800">
            {title}
          </h5>
          <p className="text-gray-600 leading-7 text-sm md:text-base font-light mb-5">
            {description}
          </p>
          <div className="flex items-center gap-x-1 mb-10">
            <p className="bg-indigo-500 px-2 py-1 rounded-sm text-white">
              Category
            </p>
            <p className="bg-indigo-50 px-3 py-1">{category}</p>
          </div>
          <div className="bg-indigo-100 inline-flex items-center px-10 py-3 gap-x-2 rounded-md">
            <span className="lg:text-2xl font-bold">{price}</span>
            <span className="font-light lg:text-xl">$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeteailsProduct;
