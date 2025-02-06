import React from "react";
import "../css/header-footer.css"; 

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">

      <p>© {new Date().getFullYear()} Artisan-Accel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
