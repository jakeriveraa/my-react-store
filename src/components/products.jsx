import React from "react";
import QuantityPicker from "./quantitypicker";

function Products({ dataprops }) {
  if (!dataprops) {
    console.warn("⚠️ Product data missing!");
    return <p style={{ color: "red" }}>No product data</p>;
  }

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        width: "200px",
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={dataprops.image}
        alt={dataprops.title}
        style={{ width: "150px", height: "150px" }}
      />
      <h3>{dataprops.title}</h3>
      <p style={{ fontWeight: "bold" }}>${dataprops.price}</p>
      <QuantityPicker />
      <button
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "8px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Products;
