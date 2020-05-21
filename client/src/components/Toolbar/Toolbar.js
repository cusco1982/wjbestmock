import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  // <header className="toolbar">
    <nav className="toolbar">



        <div className="logo"><a href="/">WJ Best Insulation</a></div>

        {/* <div className="spacer" /> */}

        <div className="nav-links">
            <ul>
                <li><a href="/">Main</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/portfolio">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>

        <div className="burger">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>

    </nav>
  // </header>
);

export default toolbar;