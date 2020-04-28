import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
// import Books from "./pages/Books";
import Main from "./pages/Main";




function App() {
  return (
    <Router>
      <div>
        <Nav/>
        {/* <Jumbotron /> */}
        <Switch>
          {/* <Route exact path="/" component={Books}/> */}
          {/* <Route exact path="/saved" component={Books}/> */}
          <Route exact path="/" component={Main}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
