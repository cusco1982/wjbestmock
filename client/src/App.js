import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// pages
import Main from "./pages/Main";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

// components
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

  //  ------------------------------------ nav imports --------------------------------------->>>
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
  //  ------------------------------------ nav imports --------------------------------------->>>



class App extends Component {


  //  ------------------------------------ nav state --------------------------------------->>>
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  //  -------------------------- nav dropbuttonfunc & drawerclosebuttonfunc ---------------------------------->>>



  render() {


  // nav stuff ------------------------------------------------------//
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
  // nav stuff ------------------------------------------------------//


    return (

      <Router>
        
        <div>

    {/* -------------------------------------------- nav component -------------------------------------------- ******/}
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          {/* <Navbar /> */}
    {/* -------------------------------------------- nav component -------------------------------------------- ******/}

          {/* <Wrapper> */}
            <Route exact path="/" component={Main} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          {/* </Wrapper> */}

          <Footer />

        </div>

      </Router>
    );
  }
}
export default App;

// return(
//   <Router>
// <div>
//   <Nav />
//   {/* <Jumbotron /> */}
//   <Switch>
//     {/* <Route exact path="/" component={Books}/> */}
//     {/* <Route exact path="/saved" component={Books}/> */}
//     <Route exact path="/" component={Main} />
//   </Switch>
// </div>
//   </Router >
// )