import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">



        <div className="toolbar__logo"><a href="/">THE LOGO</a></div>

        <div className="spacer" />

        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/">Main</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>

        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>

    </nav>
  </header>
);

export default toolbar;