import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { LinkContainer } from 'react-router-bootstrap';
import ReactLogo from './logo.svg';
import { Context } from './Reservations/Store';

/*
  import Home from './Home/Homepage';
  import Restaurants from './Restaurants/Restaurant';
  import Reviews from './Reviews/ReviewsPage';
  import CommunityPage from './CommunityPage/CommunityPage';
  import Login from './';
  import Register from './';
*/

// Context = createContext([[],() => {}])
function NavigationBar() {
  const [state, dispatch] = React.useContext(Context);
  console.log(state.session);
  const logout = () => {
    if (!state.session.name) {
      return;
    }
    dispatch({ type: 'USER_SESSION_LOGOUT', payload: {} });
  };
  const LogoutUser = async (e) => {
    console.log('appp');
    localStorage.removeItem('profile');
    localStorage.removeItem('position');
    localStorage.removeItem('id');
  };

  if (localStorage.profile) {
    var name = localStorage.profile.slice(1, -1);
    var user = localStorage.position.slice(1, -1);
  }
  var accountspan;
  if (localStorage.profile) {
    accountspan = (
      <Nav style={{ marginRight: '30px' }}>
        <Container className="float-left mx-3 text-white">
          Welcomes {name} - {user}
        </Container>
        <LinkContainer to="/" className="float-right">
          <Button variant="light" onClick={(e) => LogoutUser(e)}>
            Logout
          </Button>
        </LinkContainer>
      </Nav>
    );
  } else {
    if (state.session.name) {
      accountspan = (
        <Nav style={{ marginRight: '30px' }}>
          <Container className="float-left mx-3 text-white">
            Welcome {state.session.name} - {state.session.type}
          </Container>
          <LinkContainer to="/logout" className="float-right">
            <Button variant="light" onClick={(e) => logout()}>
              Logout
            </Button>
          </LinkContainer>
        </Nav>
      );
    } else {
      accountspan = (
        <Nav style={{ marginRight: '30px' }}>
          <LinkContainer to="/restregister" className="float-left mx-3">
            <Button variant="outline-warning">
              Register for restaurant management
            </Button>
          </LinkContainer>
          <LinkContainer to="/register" className="float-left mx-3">
            <Button variant="outline-success">Register</Button>
          </LinkContainer>
          <LinkContainer to="/login" className="float-right">
            <Button variant="light">Login</Button>
          </LinkContainer>
        </Nav>
      );
    }
  }

  return (
    <Navbar sticky="top" className="bg-dark py-2 flex-grow-1">
      {/* <Container className="bg-dark px-5 mx-0 d-flex"> */}
      <LinkContainer to="/">
        <Navbar.Brand className="text-white">
          <img
            src={ReactLogo}
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            style={{
              marginLeft: '15px'
            }}
          />
        </Navbar.Brand>
      </LinkContainer>
      <Nav className="flex-grow-1">
        <Form className="d-flex mx-3">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <LinkContainer to="/">
          <Nav.Link
            href="./Home/Homepage.jsx"
            className="text-white  line-left"
          >
            Home
          </Nav.Link>
        </LinkContainer>

        <LinkContainer to="/restaurant">
          <Nav.Link
            href="./Restaurants/Restaurant.js"
            className="text-white line-left"
          >
            Restaurants
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/reviews">
          <Nav.Link
            href="./Reviews/ReviewsPage.js"
            className="text-white line-left"
          >
            Reviews
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/communitypage">
          <Nav.Link
            href="./CommunityPage/CommunityPage.js"
            className="text-white line-left"
          >
            Community Page
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/takeaway">
          <Nav.Link
            href="./Takeaway/Takeaway.js"
            className="text-white line-left"
          >
            Takeaway
          </Nav.Link>
        </LinkContainer>
      </Nav>
      {accountspan}
      <Nav style={{ marginRight: '50px' }}>
        {/* <LinkContainer to="/restregister" className="float-left mx-3">
          <Button variant="outline-success">Restaurant Registration</Button>
        </LinkContainer>
        <LinkContainer to="/register" className="float-left mx-3">
          <Button variant="outline-success">Register</Button>
        </LinkContainer>
        <LinkContainer to="/login" className="float-right">
          <Button variant="light">Login</Button>
        </LinkContainer> */}
        <LinkContainer to="/checkout" className="float-right mx-3">
          <Button variant="primary">
            <i className="fas fa-shopping-cart"></i>
            &nbsp; Checkout
          </Button>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}
export default NavigationBar;
// Home, restaurants, reviews, community page, Login, Register
