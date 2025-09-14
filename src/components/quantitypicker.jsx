import React, { useState } from "react";
import "./quantityPicker.css";

function QuantityPicker({ initialQuantity = 1, onQuantityChange, minQuantity = 1, maxQuantity = 99 }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange && onQuantityChange(newQuantity);
    }
  };

  const handleDecrease = () => {
    if (quantity > minQuantity) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange && onQuantityChange(newQuantity);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= minQuantity && value <= maxQuantity) {
      setQuantity(value);
      onQuantityChange && onQuantityChange(value);
    }
  };

  return (
    <div className="quantity-picker">
      <button 
        className="quantity-btn decrease" 
        onClick={handleDecrease}
        disabled={quantity <= minQuantity}
      >
        -
      </button>
      
      <input
        type="number"
        className="quantity-input"
        value={quantity}
        onChange={handleInputChange}
        min={minQuantity}
        max={maxQuantity}
      />
      
      <button 
        className="quantity-btn increase" 
        onClick={handleIncrease}
        disabled={quantity >= maxQuantity}
      >
        +
      </button>
    </div>
  );
}

export default QuantityPicker;