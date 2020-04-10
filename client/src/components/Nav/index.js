import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav>
      <div className="logo">
        <h4>the nav</h4>
      </div>
      <ul className='nav-links'>
        <li><a href="/">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Projects</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
