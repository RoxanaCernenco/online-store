import React, { createContext, useState, useEffect } from "react";

export const ProductContent = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <ProductContent.Provider value={{ products }}>
      {children}
    </ProductContent.Provider>
  );
};

export default ProductProvider;
