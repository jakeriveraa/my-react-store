import React from "react";
import "./footer.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>My Online Store</h3>
            <p>Your trusted partner for quality products and excellent service.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#support">Customer Support</a></li>
              <li><a href="#returns">Returns & Exchanges</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 support@mystore.com</p>
              <p>📞 1-800-MYSTORE</p>
              <p>📍 123 Commerce St, City, State 12345</p>
              <p>⏰ Mon-Fri: 9AM-6PM EST</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} My Online Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;