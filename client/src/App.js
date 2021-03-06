import './App.css';
import React, { Component, useEffect, useState, withRouter } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';

///Lily ur last merge erased my stuff on app.js >:( pls pull & merge properly

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
import Takeaway from './components/Takeaway/Takeaway';
import TakeawayMenu from './components/Takeaway/TakeawayMenu';
import Checkout from './components/Takeaway/Checkout';

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
import Analytics from './components/Analytics/Analytics';
import StaffTicket from './components/StaffTicket/StaffTicket';

import AdminHomeNav from './components/AdminHome/AdminHomeNav';
import AdminHomePage from './components/AdminHome/AdminHomePage';
import HomepageBottom from './components/Home/HomepageBottom';
import FormSignupRestaurant from './components/Login/FormSignUpRestaurant';
import Store from './components/Reservations/Store';

import ReservationAdd from './components/Reservations/ReservationAdd';
import ReservationView from './components/Reservations/ReservationView';

require('dotenv').config();

const App = () => {
  return (
    <>
    <Toaster
      position="top-center"
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: '',
        duration: 5000,
        style: {
          background: '#ffffff',
          color: '#3A4374'
        },
        success: {
          duration: 3000,
          iconTheme: {
            primary: '#4661E6',
            secondary: '#ffffff'
          }
        },
        error: {
          iconTheme: {
            primary: '#D73737',
            secondary: '#ffffff'
          }
        }
      }}
    />
    <Store>
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
            <Route path="/checkout">
                <NavigationBar />
                <Checkout />
                <Footer />
              </Route>
              <Route path="/takeaway">
                <NavigationBar />
                <Takeaway />
                <Footer />
              </Route>
              <Route path="/takeaways/:id">
                <NavigationBar />
                <TakeawayMenu />
                <Footer />
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
            <Route path="/addReservation/:params">
              <NavigationBar />
              <ReservationAdd />
              <Footer />
            </Route>
            <Route path="/viewReservation">
              <NavigationBar />
              <ReservationView />
              <Footer />
            </Route>
            <Route path="/ticket">
              <NavigationBar />
              <StaffTicket />
              <Footer />
            </Route>
            <Route path="/analytics">
              <AdminHomeNav />
              <Analytics />
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
    </Store>
    </>
  );
};

export default App;
