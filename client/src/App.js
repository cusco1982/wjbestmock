import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
// import Books from "./pages/Books";
import Main from "./pages/Main";


import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";



import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';




class App extends Component {


  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };


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

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (

      <Router>
        <div style={{marginTop: '64px'}}>

          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}

          {/* <Navbar /> */}
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/search" component={Search} />
          </Wrapper>
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;