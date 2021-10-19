import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Cards from './Cards';

const data = {
  labels: [
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
      label: 'Reservation',
      data: [8, 9, 15, 13, 18, 20, 15],
      backgroundColor: ['rgba(75, 192, 192, 0.2)'],
      borderColor: ['rgba(75, 192, 192, 1)'],
      borderWidth: 1,
      responsive: true
    },
    {
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

function RestaurantPerformance() {
  return (
    <div>
      <Container>
        <h3>Tangle Restaurant Analytics</h3>

        <Row>
          <Col sm={8}>
            <div
              style={{
                width: '42rem',
                marginLeft: '60px'
                // marginRight: '120px'
              }}
            >
              <Bar data={data} options={options} />
            </div>
          </Col>

          <Col sm={4}>
            <div
              style={{
                marginLeft: '110px',
                justifyContent: 'center'
              }}
            >
              <Cards /> <hr />
              <Cards /> <hr />
              <Cards /> <hr />
              <Cards /> <hr />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RestaurantPerformance;
