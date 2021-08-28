import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./Component/NavigationBar";
require("dotenv").config(); //

function App() {
  return (
    <Router>
      <Switch>
        <NavigationBar />
      </Switch>
    </Router>
  );
}

export default App;
