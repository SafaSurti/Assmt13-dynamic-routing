import React from "react";
import { useParams } from "react-router-dom";

const CardDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <img src={product.image} alt={product.title} style={{ width: "300px", height: "300px", objectFit: "contain" }} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
    </div>
  );
};

export default CardDetails;
