import "./quantityPicker.css";
import { useState } from "react";

function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    setQuantity(quantity + 1);
  }

  function decrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="quantity-picker">
      <button onClick={decrease}>-</button>
      <label>{quantity}</label>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default QuantityPicker;
