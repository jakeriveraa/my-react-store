import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";

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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/catalog" className="nav-link">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todo" className="nav-link">
                To Do list
              </Link>
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
