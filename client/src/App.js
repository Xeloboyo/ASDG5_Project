import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./Component/NavigationBar";
import CommunityPage from "./Component/CommunityPage";
import Promotions from "./Component/Promotions";
require("dotenv").config(); //

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/communitypage">
          <NavigationBar />
          <CommunityPage />
        </Route>
        <Route path="/promotions">
          <NavigationBar />
          <Promotions />
        </Route>
        <Route path="/">
          <NavigationBar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
