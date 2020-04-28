import React from "react";
import "./style.css";



function Nav() {


  return (
    <nav>
      <div className="logo">
        <h4>the nav</h4>
      </div>
      <div className="phone-number">1-732-777-4444</div>
      <ul className='nav-links'>
        <li><a href="/">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Nav;
