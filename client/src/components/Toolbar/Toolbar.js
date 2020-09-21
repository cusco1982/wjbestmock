import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

import skyline from "./skyline.png"

const toolbar = props => (
  // <header className="toolbar">
    <nav className="toolbar">



        <div className="logo"><a href="/">WJ Best Insulation</a></div>
        {/* <br/> */}

        <div>
        <img style={{height:"206px",width:"690px"}} src={skyline} alt="skyline"/>
        </div>


        <div className="nav-links">
            <ul>
                <li><a href="/">Main</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/projects2">Projects2</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/DemoCarousel">DemoCarousel</a></li>
                <li><a href="/New">New</a></li>

            </ul>
        </div>

        <div className="burger">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>

    </nav>
  // </header>
);

export default toolbar;