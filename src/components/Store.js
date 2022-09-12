import React, { useContext } from "react";
import { ProductContext } from "../context/DataProvider";
import Product from "./Shared/Product";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Store = () => {
  const productdata = useContext(ProductContext);

  return (
    <>
      {productdata.length ? (
        <div className="container grid grid-cols-12 gap-5 mt-10">
          {productdata.map((item) => {
            return <Product key={item.id} products={item} />;
          })}
        </div>
      ) : (
        <div className="w-full container h-full  flex items-center justify-center mt-10">
          <AiOutlineLoading3Quarters className="text-4xl text-indigo-800 animate-spin" />
        </div>
      )}
    </>
  );
};

export default Store;
