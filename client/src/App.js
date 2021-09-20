import './App.css';
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

// navbar
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

// main page
import Homepage from './components/Home/Homepage';
import CommunityPage from './components/CommunityPage/CommunityPage';
import CommunityPageForm from './components/CommunityPage/CommunityPageForm';
import CommunityPageEdit from './components/CommunityPage/CommunityPageEdit';
import CommunityPageEdits from './components/CommunityPage/CommunityPageEdits';

import Form from './components/Login/Form';
import Login from './components/Login/Login';

import Promotions from './components/Promotions/Promotions';
import PromotionsPast from './components/Promotions/PromotionsPast';
import PromotionsEdit from './components/Promotions/PromotionsEdit';
import PromotionsHome from './components/Promotions/PromotionsHome';

import Restaurant from './components/Restaurants/Restaurant';
import RestaurantDetails from './components/Restaurants/RestaurantDetails';
import RestaurantAdd from './components/Restaurants/RestaurantAdd';
import RestaurantEdit from './components/Restaurants/RestaurantEdit';
import Menu from './components/Menu/Menu';
import MenuEdit from './components/Menu/MenuEdit';
import MenuAdd from './components/Menu/MenuAdd';
import Reviews from './components/Reviews/ReviewsPage';

// staff
import Dashboard from './components/Dashboard/Dashboard';
import Analytics from './components/Analytics/Analytics';
import StaffTicket from './components/StaffTicket/StaffTicket';
import Settings from './components/Dashboard/Settings';
import Profile from './components/Dashboard/Profile';
import Help from './components/Dashboard/Help';

// admin
import AdminHomeNav from './components/AdminHome/AdminHomeNav';
import AdminHomePage from './components/AdminHome/AdminHomePage';
import HomepageBottom from './components/Home/HomepageBottom';

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
              <CommunityPage />
              <Footer />
            </Route>
            <Route path="/communitypageform">
              <NavigationBar />
              <CommunityPageForm />
              <Footer />
            </Route>
            <Route path="/communitypageedits">
              <NavigationBar />
              <CommunityPageEdits />
              <Footer />
            </Route>
            <Route path="/communitypageedit">
              <NavigationBar />
              <CommunityPageEdit />
              <Footer />
            </Route>
            <Route path="/promotionspast">
              <AdminHomeNav />
              <PromotionsPast />
            </Route>
            <Route path="/promotionsedit">
              <AdminHomeNav />
              <PromotionsEdit />
            </Route>
            <Route path="/promotions">
              <AdminHomeNav />
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
              <Analytics />
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
            <Route path="/adminhomenav">
              <AdminHomeNav />
              <AdminHomePage />
              <PromotionsHome />
            </Route>
            <Route path="/">
              <NavigationBar />
              <Homepage />
              <PromotionsHome />
              <HomepageBottom />
              <Footer />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
