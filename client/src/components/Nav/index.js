import React from "react";
import "./style.css";

function Nav() {





  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active')
    })
  }
  
  navSlide();
  



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
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Nav;
