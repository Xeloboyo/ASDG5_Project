import "./App.css";
import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./Component/NavigationBar";
import CommunityPage from "./Component/CommunityPage";
import Footer from "./Component/Footer";
import Promotions from "./Component/Promotions";
import Homepage from "./Component/Home/Homepage";
import Container from "react-bootstrap/Container";
import CommunityPageForm from "./Component/CommunityPageForm";
import CommunityPageEdit from "./Component/CommunityPageEdit";
import CommunityPageEdits from "./Component/CommunityPageEdits";
import PromotionsPast from "./Component/PromotionsPast";
import PromotionsEdit from "./Component/PromotionsEdit";
import PromotionsHome from "./Component/PromotionsHome";
import Form from "./Component/Form";
import Login from "./Component/Login";
require("dotenv").config(); 

class App extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.sendHook("Webhook Called within app haha.. uh.. app has been ran.");
  }
  sendHook(msg) {
    if (!process.env.HOOK_URL) {
      return;
    }
    let x = new XMLHttpRequest();
    x.open("POST", process.env.HOOK_URL);
    x.setRequestHeader("Content-type", "application/json");
    let params = {
      username: "Heroku",
      embeds: [
        {
          title: "[Internal app message]",
          description: msg,
          footer: {
            text: "This was made with procrastination <3",
            icon_url: "https://i.imgur.com/VAFzZeX.jpeg",
          },
        },
      ],
    };
    x.send(JSON.stringify(params));
  }
  render() {
    return (
      <Router>
        <Container className="mx-0 px-0" fluid>
          <NavigationBar />
          <Switch>
            <Route path="/communitypage">
              <CommunityPage />
            </Route>
            <Route path="/communitypageform">
              <CommunityPageForm />
            </Route>
            <Route path="/communitypageedits">
              <CommunityPageEdits />
            </Route>
            <Route path="/communitypageedit">
              <CommunityPageEdit />
            </Route>
            <Route path="/promotionspast">
              <PromotionsPast />
            </Route>
            <Route path="/promotionsedit">
              <PromotionsEdit />
            </Route>
            <Route path="/promotions">
              <Promotions />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Form />
            </Route>
            <Route path="/">
              <Homepage />
              <PromotionsHome />
            </Route>
          </Switch>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
