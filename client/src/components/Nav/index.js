import React from "react";
import "./style.css";






// const navSlide = () => {
//   const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.nav-links');
//   const navLinks = document.querySelectorAll('.nav-links li');



//   burger.addEventListener('click', () => {

//     // toggle nav
//     nav.classList.toggle('nav-active');

//     // animate links
//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = '';
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
//       }
//     });
//     // burger animation
//     burger.classList.toggle('toggle');
//   });
// }

// navSlide();





function Nav() {


  return (
    <nav>
      <div className="logo">
        <h4>the nav</h4>
      </div>
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
