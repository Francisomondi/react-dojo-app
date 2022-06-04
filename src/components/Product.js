import React from "react";

const Product = () => {
  const products = [
    "laptops",
    "mouse",
    "telepropters",
    "desktops",
    "mobile phones",
    "ear phones"
  ];
  const productList = products.map(product => <h2>{product}</h2>);

  return <div>{productList}</div>;
};

export default Product;
