import React from "react";
import "./navbar.css";

function Navbar({ cartItemCount = 0 }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>🛍️ My Online Store</h1>
        </div>
        
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#catalog" className="nav-link">Catalog</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>

        <div className="navbar-cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">Cart ({cartItemCount})</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;