import { useContext } from "react";
import GlobalContext from "../globalContext";
import "./cart.css";

function Cart() {
  const context = useContext(GlobalContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ready to complete your order?</h1>

      <div className="parent" style={{ display: "flex", gap: "20px" }}>
        <ul className="list" style={{ flex: 1 }}>
          {context.cart.length === 0 ? (
            <li>No items in your cart</li>
          ) : (
            context.cart.map((prod, index) => (
              <li key={index}>
                <h4>{prod.title}</h4>
              </li>
            ))
          )}
        </ul>

        <div className="side-menu" style={{ flex: 1 }}>
          <h3>Total</h3>
          <h2>$9,999.99</h2>
          <button className="btn btn-pay">Pay Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
