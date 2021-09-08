import './App.css';
import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import NavigationBar from './Component/NavigationBar';
import Footer from './Component/Footer';

import Homepage from './Component/Home/Homepage';
import CommunityPage from './Component/CommunityPage/CommunityPage';
import CommunityPageForm from './Component/CommunityPage/CommunityPageForm';
import CommunityPageEdit from './Component/CommunityPage/CommunityPageEdit';
import CommunityPageEdits from './Component/CommunityPage/CommunityPageEdits';

import Promotions from './Component/Promotions/Promotions';
import PromotionsPast from './Component/Promotions/PromotionsPast';
import PromotionsEdit from './Component/Promotions/PromotionsEdit';
import PromotionsHome from './Component/Promotions/PromotionsHome';

import Restaurant from './Component/Restaurants/Restaurant';
import RestaurantDetails from './Component/Restaurants/RestaurantDetails';
import RestaurantAdd from './Component/Restaurants/RestaurantAdd';
import RestaurantEdit from './Component/Restaurants/RestaurantEdit';
import Menu from './Component/Menu/Menu';
import MenuEdit from './Component/Menu/MenuEdit';
import MenuAdd from './Component/Menu/MenuAdd';

require('dotenv').config();

class App extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.sendHook('Webhook Called within app haha.. uh.. app has been ran.');
  }
  sendHook(msg) {
    if (!process.env.HOOK_URL) {
      return;
    }
    let x = new XMLHttpRequest();
    x.open('POST', process.env.HOOK_URL);
    x.setRequestHeader('Content-type', 'application/json');
    let params = {
      username: 'Heroku',
      embeds: [
        {
          title: '[Internal app message]',
          description: msg,
          footer: {
            text: 'This was made with procrastination <3',
            icon_url: 'https://i.imgur.com/VAFzZeX.jpeg'
          }
        }
      ]
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
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/menuadd">
              <MenuAdd />
            </Route>
            <Route path="/menuedit">
              <MenuEdit />
            </Route>
            <Route path="/restaurant">
              <Restaurant />
            </Route>
            <Route path="/restaurantdetails">
              <RestaurantDetails />
            </Route>
            <Route path="/restaurantadd">
              <RestaurantAdd />
            </Route>
            <Route path="/restaurantedit">
              <RestaurantEdit />
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
