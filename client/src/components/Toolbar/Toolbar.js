import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  // <header className="toolbar">
    <nav className="toolbar">



        <div className="logo"><a href="/">WJ Best Insulation</a></div>


        <div className="nav-links">
            <ul>
                <li><a href="/">Main</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/projects2">Projects2</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/DemoCarousel">DemoCarousel</a></li>
            </ul>
        </div>

        <div className="burger">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>

    </nav>
  // </header>
);

export default toolbar;