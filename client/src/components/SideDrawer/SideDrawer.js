import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (

    <nav className={drawerClasses}>

      <ul>
        <li>
          <a href="/">Main</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>


        {/* <li>
          Contact Us:
        </li>

        <li>
          P:(732) 423-9671
        </li>

        <li>
          F:(722)333-1111
        </li>

        <li>
          info@wjbestinsulation.com
        </li>

        <li>
          2 Nora Rd
        </li>

        <li>
          Edison, NJ 08837
        </li> */}

      </ul>

    </nav>





  );
};

export default sideDrawer;
