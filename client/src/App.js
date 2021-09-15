import './App.css';
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import NavigationBar from './components-staff/NavigationBar';
import Footer from './components-staff/Footer';

import Homepage from './components-staff/Home/Homepage';
import CommunityPage from './components-staff/CommunityPage/CommunityPage';
import CommunityPageForm from './components-staff/CommunityPage/CommunityPageForm';
import CommunityPageEdit from './components-staff/CommunityPage/CommunityPageEdit';
import CommunityPageEdits from './components-staff/CommunityPage/CommunityPageEdits';

import Form from './components-staff/Login/Form';
import Login from './components-staff/Login/Login';

import Promotions from './components-staff/Promotions/Promotions';
import PromotionsPast from './components-staff/Promotions/PromotionsPast';
import PromotionsEdit from './components-staff/Promotions/PromotionsEdit';
import PromotionsHome from './components-staff/Promotions/PromotionsHome';

import Restaurant from './components-staff/Restaurants/Restaurant';
import RestaurantDetails from './components-staff/Restaurants/RestaurantDetails';
import RestaurantAdd from './components-staff/Restaurants/RestaurantAdd';
import RestaurantEdit from './components-staff/Restaurants/RestaurantEdit';
import Menu from './components-staff/Menu/Menu';
import MenuEdit from './components-staff/Menu/MenuEdit';
import MenuAdd from './components-staff/Menu/MenuAdd';
import Reviews from './components-staff/Reviews/ReviewsPage';

// staff
import Dashboard from './components-staff/Dashboard/Dashboard';
import BusinessPro from './components-staff/Analytics/Analytics';
import StaffTicket from './components-staff/StaffTicket/StaffTicket';
import Settings from './components-staff/Settings';
import Profile from './components-staff/Profile';
import Help from './components-staff/Help';

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
          <Switch>
            <Route path="/communitypage">
              <NavigationBar />
              <Footer />
              <CommunityPage />
            </Route>
            <Route path="/communitypageform">
              <NavigationBar />
              <Footer />
              <CommunityPageForm />
            </Route>
            <Route path="/communitypageedits">
              <NavigationBar />
              <Footer />
              <CommunityPageEdits />
            </Route>
            <Route path="/communitypageedit">
              <NavigationBar />
              <Footer />
              <CommunityPageEdit />
            </Route>
            <Route path="/promotionspast">
              <NavigationBar />
              <Footer />
              <PromotionsPast />
            </Route>
            <Route path="/promotionsedit">
              <NavigationBar />
              <Footer />
              <PromotionsEdit />
            </Route>
            <Route path="/promotions">
              <NavigationBar />
              <Footer />
              <Promotions />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Form />
            </Route>
            <Route path="/menu">
              <NavigationBar />
              <Footer />
              <Menu />
            </Route>
            <Route path="/menuadd">
              <NavigationBar />
              <Footer />
              <MenuAdd />
            </Route>
            <Route path="/menuedit">
              <NavigationBar />
              <Footer />
              <MenuEdit />
            </Route>
            <Route path="/restaurant">
              <NavigationBar />
              <Footer />
              <Restaurant />
            </Route>
            <Route path="/restaurantdetails">
              <NavigationBar />
              <Footer />
              <RestaurantDetails />
            </Route>
            <Route path="/restaurantadd">
              <NavigationBar />
              <Footer />
              <RestaurantAdd />
            </Route>
            <Route path="/restaurantedit">
              <NavigationBar />
              <Footer />
              <RestaurantEdit />
            </Route>
            <Route path="/reviews">
              <NavigationBar />
              <Footer />
              <Reviews />
            </Route>
            <Route path="/dashboard/ticket">
              <Dashboard />
              <StaffTicket />
            </Route>
            <Route path="/dashboard/analytics">
              <Dashboard />
              <BusinessPro />
            </Route>
            <Route path="/dashboard/profile">
              <Dashboard />
              <Profile />
            </Route>
            <Route path="/dashboard/settings">
              <Dashboard />
              <Settings />
            </Route>
            <Route path="/dashboard/help">
              <Dashboard />
              <Help />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <NavigationBar />
              <Homepage />
              <PromotionsHome />
              <Footer />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
