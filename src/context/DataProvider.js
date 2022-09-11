import React, { useState, useEffect, createContext } from "react";
import { getProducts } from "../services/api";

export const ProductContext = createContext(); //create contenxt

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      //get data from function api as async function and setdata to state
      setProducts(await getProducts());
    };

    fetchApi();

  }, []);
  return (
    // use context provider as childern props and pass value to use it...
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default DataProvider;
