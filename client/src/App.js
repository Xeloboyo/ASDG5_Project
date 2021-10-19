import './App.css';
import React, { Component, useEffect, useState, withRouter } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

// navbar
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

import Homepage from './components/Home/Homepage';
import CommunityPage from './components/CommunityPage/CommunityPage';
import CommunityPageForm from './components/CommunityPage/CommunityPageForm';
import CommunityPageEdit from './components/CommunityPage/CommunityPageEdit';
import CommunityPageEdits from './components/CommunityPage/CommunityPageEdits';

import Form from './components/Login/Form';
import Form2 from './components/Login/Form2';
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

import AdminHomeNav from './components/AdminHome/AdminHomeNav';
import AdminHomePage from './components/AdminHome/AdminHomePage';
import HomepageBottom from './components/Home/HomepageBottom';
import FormSignupRestaurant from './components/Login/FormSignUpRestaurant';

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
            <Route
              path="/communitypageedits/:id"
              render={(props) => (
                <CommunityPageEdits {...props} key={this.props.location.key} />
              )}
            >
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
            <Route
              path="/promotionsedit/:id"
              render={(props) => (
                <PromotionsEdit {...props} key={this.props.location.key} />
              )}
            >
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
            <Route path="/restregister">
              <Form2 />
              <Form />
            </Route>
            <Route path="/register">
              <Form />
            </Route>
            <Route path="/menu">
              <NavigationBar />
              <Menu />
              <Footer />
            </Route>
            <Route path="/menuadd">
              <NavigationBar />
              <MenuAdd />
              <Footer />
            </Route>
            <Route
              path="/menuedit/:id"
              render={(props) => (
                <RestaurantEdit {...props} key={this.props.location.key} />
              )}
            >
              <NavigationBar />
              <MenuEdit />
              <Footer />
            </Route>
            <Route path="/restaurant">
              <NavigationBar />
              <Restaurant />
              <Footer />
            </Route>
            <Route path="/restaurantdetails">
              <NavigationBar />
              <RestaurantDetails />
              <Footer />
            </Route>
            <Route path="/restaurantadd">
              <NavigationBar />
              <RestaurantAdd />
              <Footer />
            </Route>
            <Route
              path="/restaurantedit/:id"
              render={(props) => (
                <RestaurantEdit {...props} key={this.props.location.key} />
              )}
            >
              <NavigationBar />
              <RestaurantEdit />
              <Footer />
            </Route>
            <Route path="/reviews">
              <NavigationBar />
              <Reviews />
              <Footer />
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
