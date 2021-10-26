import React, { Component, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaCheckCircle, FaTimesCircle, FaMotorcycle } from 'react-icons/fa';

import axios from 'axios';

const TicketMain = () => {

  const [tickets, setTickets] = useState(initialState);


  // Get All Ticket (for mapping)
  componentDidMount() {
    axios.get(`http://localthost:5002/ticketing/`).then(res => {
      const ticketing = res.data;
      this.setState({ticketing})
    })
  }

    // Delete One
    
    handleChangeDelete = event => {
      this.setState({ id: event.target.value });
    }
    handleClickDelete = event => {
      event.preventDefault();
      axios.post(`http://localthost:5002/ticketing/ticketdelete/${this.state.id}`).then((res) => {
        console.log(res);
        console.log(res.data);
      })
      console.log('deleted one ticket')
    };

        // Accept One
    
        handleChangeAccept = event => {
          this.setState({ id: event.target.value });
        }
        handleClickAccept = event => {
          event.preventDefault();
          axios.post(`http://localthost:5002/ticketing/ticketcomplete/${this.state.id}`).then((res) => {
            console.log(res);
            console.log(res.data);
          })
          console.log('finsih one ticket')
        };

    return (
      <div>
        <Container>
            <Card
              style={{
                width: '17rem',
                marginBottom: '25px',
                marginLeft: '100px' // start after sidebar
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
                      {tickets.Product_UserName}
                    </span>
                    <br />
                    {/* order ID */}
                    {/* <span style={{ color: 'grey' }}>#{RandomNumber}</span> */}
                    <span style={{ color: 'grey' }}>#{tickets._id}</span>
                  </Col>
                </Row>
              </Card.Header>

              {/* Row 3 -> Order Description */}
              <Card.Body>
                <Row>
                  <Col sm={3}>
                    {/* order quantity */}
                    {/* <span>{RandomQuantity} x</span> */}
                    <span>{tickets.Product_Quantity} x</span>
                  </Col>

                  <Col sm={9}>
                    {/* items description */}
                    {/* <span>${RandomFood}</span> */}
                    <span>${tickets.Product_menuItems}</span>
                  </Col>
                </Row>
              </Card.Body>

              {/* Row 4 -> Button */}
              <div>
                <Row>
                  <Col>
                    <Button
                      style={{
                        background: 'red',
                        width: '80%',
                        margin: '10px 15px',
                        padding: '5px',
                        display: 'block'
                      }}
                      onClickDelete={() => this.handleChangeDelete(e._id)}
                    >
                      {/* cancel */}
                      <FaTimesCircle />
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      style={{
                        background: 'green',
                        width: '80%',
                        margin: '10px 15px',
                        padding: '5px',
                        display: 'block'
                      }}
                      onClickAccept={() => this.handleChangeAccept(e._id)}
                    >
                      {/* accept */}
                      <FaCheckCircle />
                    </Button>
                  </Col>
                </Row>
              </div>
            </Card>
        </Container>
      </div>
    )
  }

export default TicketMain;
// export default TicketMain;

/* static data
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
*/

// create 2 Ticket Designs, using if statement to determine whether
//   it's for takeaway and reservations
//     if takeaway, use logo { FaMotorcycle }
//     if reservations, use logo { GiTabletopPlayers }
//     both tickets have accept and cancel button
//   page allows cancel all, will show warning
