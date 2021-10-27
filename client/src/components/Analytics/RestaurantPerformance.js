import React, { Component, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

function RestaurantPerformance() {
  // const restaurants = [
  //   { title: 'Number of New Users', number: '20' },
  //   { title: 'Advertisement Used', number: '20' },
  //   { title: 'Net Bookings', number: '20' },
  //   { title: 'Takeaway Ordered', number: '20' }
  // ];

  const [performances, setPerformances] = useState('');

  const data = {
    labels: [
      // map.restaurant_name
      // show it here
      'Restaurant a',
      'Restaurant b',
      'Restaurant c',
      'Restaurant d',
      'Restaurant  e',
      'Restaurant f',
      'Restaurant g'
    ],

    datasets: [
      {
        // map reservation based on the restaurant
        label: 'Reservation',
        data: [8, 9, 15, 13, 18, 20, 15],
        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1,
        responsive: true
      },
      {
        // map takeaway based on the restaurant
        // show output
        label: 'Takeaway',
        data: [10, 4, 6, 12, 21, 3, 18],
        backgroundColor: ['red'],
        borderColor: ['white'],
        borderWidth: 1,
        responsive: true
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  const displayRestaurant = (props) => {
    const { restaurants } = props;

    if (restaurants.length > 0) {
      return restaurants.map((restaurant, index) => {
        console.log(restaurant);
        return (
          <div
            style={{
              marginLeft: '95px',
              justifyContent: 'center',
              display: 'block'
            }}
          >
            <Card
              style={{
                width: '10rem',
                padding: '10px',
                // display: 'block',
                margin: '10px 15px'
              }}
            >
              <div className="text-center">
                <span
                  style={{ fontSize: '12px' }}
                  className="restaurant__title"
                >
                  {restaurant.title}
                </span>
                <br />
                <span
                  style={{ fontSize: '20px' }}
                  className="restaurant__number"
                >
                  {restaurant.number}
                </span>
              </div>
            </Card>
            <hr />
          </div>
        );
      });
    }
  };

  return (
    <div>
      <Container>
        <h3 style={{ marginTop: '10px' }}>Tangle Restaurant Analytics</h3>

        <Row>
          <Col sm={9}>
            <div
              style={{
                width: '38rem',
                marginTop: '50px',
                marginLeft: '10px'
                // marginRight: '120px'
              }}
            >
              <Bar data={data} options={options} />
            </div>
          </Col>
          <Col sm={1}>{displayRestaurant(props)}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default RestaurantPerformance;
