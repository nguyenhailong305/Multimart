import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
  console.log(data, "lits");
  return (
    <>
      {data.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </>
  );
};

export default ProductList;
