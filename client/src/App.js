import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
// import Books from "./pages/Books";
import Main from "./pages/Main";



import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';




class App extends Component {


  state = {
    sideDrawerOpen: false
  };


  return(
    <Router>
  <div>
    <Nav />
    {/* <Jumbotron /> */}
    <Switch>
      {/* <Route exact path="/" component={Books}/> */}
      {/* <Route exact path="/saved" component={Books}/> */}
      <Route exact path="/" component={Main} />
    </Switch>
  </div>
    </Router >
  )
}

export default App;
