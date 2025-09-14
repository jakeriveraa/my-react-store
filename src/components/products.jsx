import React, { useState } from "react";
import QuantityPicker from "./quantitypicker";
import "./products.css";

function Products({ dataprops, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(dataprops?.price || 0);

  if (!dataprops) {
    console.warn("⚠️ Product data missing!");
    return <p style={{ color: "red" }}>No product data</p>;
  }

  // Calculate total when quantity changes
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    setTotal(dataprops.price * newQuantity);
  };

  const handleAddToCart = () => {
    const cartItem = {
      product: dataprops,
      quantity: quantity,
      total: total
    };
    
    if (onAddToCart) {
      onAddToCart(cartItem);
    }
    
    alert(`Added ${quantity} x ${dataprops.title} to cart!\nTotal: $${total.toFixed(2)}`);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={dataprops.image}
          alt={dataprops.title}
          className="product-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/200x200?text=No+Image';
          }}
        />
      </div>

      <div className="product-info">
        <h3 className="product-title">{dataprops.title}</h3>
        
        {dataprops.category && (
          <div className="product-category">{dataprops.category}</div>
        )}
        
        {dataprops.description && (
          <p className="product-description">{dataprops.description}</p>
        )}
        
        <div className="product-price">
          ${dataprops.price.toFixed(2)}
        </div>
      </div>

      <div className="quantity-section">
        <label className="quantity-label">Quantity:</label>
        <QuantityPicker 
          initialQuantity={1}
          onQuantityChange={handleQuantityChange}
          minQuantity={1}
          maxQuantity={20}
        />
      </div>

      <div className="total-section">
        <div className="total-label">Total Price:</div>
        <div className="total-price">${total.toFixed(2)}</div>
      </div>

      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Products;