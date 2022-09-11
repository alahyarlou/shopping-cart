import React, { useContext } from "react";
import { ProductContext } from "../context/DataProvider";
import Product from "./Shared/Product";
const Store = () => {
  const productdata = useContext(ProductContext);
  return (
    <div className="container grid grid-cols-12 gap-5">
      {productdata.map((item) => {
        return <Product key={item.id} products={item} />;
      })}
    </div>
  );
};

export default Store;
