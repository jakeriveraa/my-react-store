import React, { useState, useEffect } from "react";
import Products from "../components/products";
import DataService from "../dataService/data";
import "./catalog.css";

function Catalog() {
  const [productsGlobal, setProductsGlobal] = useState([]);

  useEffect(() => {
    console.log("📌 Catalog mounted");

    const service = new DataService();
    const products = service.getProducts();
    console.log("✅ Products fetched:", products);
    setProductsGlobal(products);
  }, []);

  return (
    <div className="catalog">
      <h2>Catalog Page</h2>
      <h3>Products available: {productsGlobal.length}</h3>

      {productsGlobal.length === 0 ? (
        <p style={{ color: "red", fontWeight: "bold" }}>
          ⚠️ No products found — check DataService!
        </p>
      ) : (
        <div className="product-grid">
          {productsGlobal.map((product) => (
            <Products key={product.id} dataprops={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Catalog;

