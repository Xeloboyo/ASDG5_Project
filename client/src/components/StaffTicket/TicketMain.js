/* 
  create 2 Ticket Designs, using if statement to determine whether
    it's for takeaway and reservations
      if takeaway, use logo { FaMotorcycle }
      if reservations, use logo { GiTabletopPlayers }
      both tickets have accept and cancel button
    page allows cancel all, will show warning
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaCheckCircle, FaTimesCircle, FaMotorcycle } from 'react-icons/fa';
import { GiTabletopPlayers } from 'react-icons/gi';

// generate package data
import { v4 as uuidv4 } from 'uuid';
import {
  uniqueNamesGenerator,
  NumberDictionary,
  names,
  adjectives,
  animals
} from 'unique-names-generator';

// const { id } = this.props.match.params.id;

// using uniqueNamesGenerator to Generate random names within the npm package database
const RandomName = uniqueNamesGenerator({
  // database contains 4900 unique names

  dictionaries: [names],
  length: 1,
  style: 'capital',
  separator: ' '
  // output random names with format: First Last
});

const RandomQuantity = uniqueNamesGenerator({
  // database generate random number from 1 - 999 by default

  dictionaries: [NumberDictionary],
  min: 1,
  max: 99
  // output random number from: 1 - 99
});

const RandomNumber = uniqueNamesGenerator({
  // database generate random number from 1 - 999 by default

  dictionaries: [NumberDictionary],
  min: 100,
  max: 999
  // output random number from: 100 - 999
});

const RandomFood = uniqueNamesGenerator({
  // database generate random adjectives and animals

  dictionaries: [adjectives, animals],
  length: 2,
  style: 'capital',
  separator: ' '
  // output Adjectives Animals
});

class TicketMain extends Component {
  constructor(props) {
    super(props);

    this.onChangeAllTicket = this.onChangeAllTicket.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.onChangeAcceptTicket = this.onChangeAcceptTicket.bind(this);
    this.onChangeDeleteTicket = this.onChangeDeleteTicket.bind(this);
    this.onChangeDeleteAllTicket = this.onChangeDeleteAllTicket.bind(this);

    // this.onChangeTicketOwner = this.onChangeTicketOwner.bind(this);
    // this.onChangeTicketOrderQuantity =
    // this.onChangeTicketOrderQuantity.bind(this);
    // this.onChangeTicketOrderDescription =
    // this.onChangeTicketOrderDescription.bind(this);

    const { id } = this.props.match.params.id;
    console.log(id);

    this.state = {
      // UserID: '',
      // OrderID: '',
      // id: '',
      TicketOwner: '',
      TicketOrderQuantity: '',
      TicketOrderDescription: '',
      TicketStatus: '',
      TicketUpdateDescription: '',
      AllTicket: [{}]
    };
  }

  // Show All Tickets
  onChangeAllTicket(e) {
    this.setState({
      AllTicket: e.target.value
    });
  }

  // Ticket Buttons
  async handleClick(e) {
    console.log(e);
  }

  // Accept Ticket
  onChangeAcceptTicket(e) {
    e.preventDefault();

    const response = fetch('http://localhost:5002/ticketcomplete/:id', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
      // body: JSON.stringify(newList)
    });
    const jsonData = response.json();
    console.log(`${jsonData.message}`);
  }

  // Delete Ticket
  onChangeDeleteTicket(e) {
    e.preventDefault();

    const response = fetch('http://localhost:5002/ticketdelete/:id', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
      // body: JSON.stringify(newList)
    });
    const jsonData = response.json();
    console.log(`${jsonData.message}`);
  }

  // Get all tickets
  async componentDidMount() {
    // const { id } = req.params;
    const { id } = this.props.match.params.id;

    try {
      const response = fetch('http://localhost:5002/ticket/', {
        method: 'GET',
        headers: {
          // 'content-type': 'application/json'
        },
        body: JSON.stringify(id)
      });
      const jsonData = response.json(id);
      console.log(`${jsonData.message}`);

      this.setState({ All_postEdit: jsonData });
    } catch (err) {
      console.error(err.message);
      console.log(err);
    }
  }

  render() {
    const AllTicket = this.state.AllTicket;
    const { id } = this.props.match.params.id;

    return (
      <div>
        <Container>
          {Object.values(AllTicket.data).map((e) => {
            return (
              <Card
                style={{
                  width: '17rem',
                  marginBottom: '25px',
                  marginLeft: '220px' // start after sidebar
                  // marginRight: 'auto'
                }}
              >
                {/* Row 1 -> Time 
          <Row>
            {/* how many minutes 
            {/* automatically starts from 30 minutes 
            <p>in 30 minutes</p>
          </Row>
            */}

                {/* Row 2 -> Order Header */}
                <Card.Header>
                  <Row>
                    <Col>
                      <IconContext.Provider
                        value={{ color: 'purple', size: '50px' }}
                      >
                        <FaMotorcycle />
                      </IconContext.Provider>
                    </Col>
                    <Col>
                      {/* username */}
                      {/* <span style={{ fontSize: '18px' }}> {RandomName} </span> */}
                      <span style={{ fontSize: '18px' }}>
                        {' '}
                        ${e.TicketOwner}{' '}
                      </span>{' '}
                      <br />
                      {/* order ID */}
                      {/* <span style={{ color: 'grey' }}>#{RandomNumber}</span> */}
                      <span style={{ color: 'grey' }}>#{id}</span>
                    </Col>
                  </Row>
                </Card.Header>

                {/* Row 3 -> Order Description */}
                <Card.Body>
                  <Row>
                    <Col sm={3}>
                      {/* order quantity */}
                      {/* <span>{RandomQuantity} x</span> */}
                      <span>{e.TicketOrderQuantity} x</span>
                    </Col>

                    <Col sm={9}>
                      {/* items description */}
                      {/* <span>${RandomFood}</span> */}
                      <span>${e.TicketOrderDescription}</span>
                    </Col>
                  </Row>
                </Card.Body>

                {/* Row 4 -> Button */}
                <div>
                  <Row>
                    <Col>
                      <Button
                        onClick={() => this.handleClick(e._id)}
                        style={{
                          background: 'red',
                          width: '80%',
                          margin: '10px 15px',
                          padding: '5px',
                          display: 'block'
                        }}
                      >
                        {/* cancel */}
                        <FaTimesCircle />
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        onClick={() => this.handleClick(e._id)}
                        style={{
                          background: 'green',
                          width: '80%',
                          margin: '10px 15px',
                          padding: '5px',
                          display: 'block'
                        }}
                      >
                        {/* accept */}
                        <FaCheckCircle />
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            );
          })}
        </Container>
      </div>
    );
  }
}
export default TicketMain;
