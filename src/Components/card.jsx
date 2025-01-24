import React from "react";
import { Link } from "react-router-dom";

const CardList = ({ products }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", width: "200px" }}>
          <img src={product.image} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
          <h4>{product.title}</h4>
          <p>Price: ${product.price}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default CardList;
