import React from "react";
import "./../App.css"; // make sure footer gets styled

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My React Store. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
