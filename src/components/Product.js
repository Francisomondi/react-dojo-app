import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      firstname: "Francis",
      lastname: "omondi",
      role: "IT"
    },
    {
      id: 2,
      firstname: "hamphrey",
      lastname: "designer",
      role: "designs"
    },
    {
      id: 3,
      firstname: "brian",
      lastname: "otieno",
      role: "SQ"
    },
    {
      id: 4,
      firstname: "salome",
      lastname: "muitaliano",
      role: "Procuremets"
    }
  ];
  const productList = products.map(product => (
    <h2 key={product.id}>{product.firstname}</h2>
  ));

  return <div>{productList}</div>;
};

export default Product;
