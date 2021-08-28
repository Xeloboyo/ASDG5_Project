import "./App.css";
import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./Component/NavigationBar";
import CommunityPage from "./Component/CommunityPage";
import Promotions from "./Component/Promotions";
import Homepage from "./Component/Home/Homepage";
import Container from 'react-bootstrap/Container';
require("dotenv").config(); //

class App extends Component{
  render(){

    return(
      <Router>
        <Container className="mx-0 px-0" fluid>
          <NavigationBar />
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
            <Route path="/communitypage">
              <CommunityPage />
            </Route>
            <Route path="/promotions">
              <Promotions />
            </Route>
          </Switch>
        </Container>
      </Router>
    );

  }
}



export default App;
