import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Container, Row, Col, Card } from 'react-bootstrap';

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

const restaurants = [
  { title: 'Number of New Users', number: '20' },
  { title: 'Advertisement Used', number: '20' },
  { title: 'Net Bookings', number: '20' },
  { title: 'Takeaway Ordered', number: '20' }
];

function RestaurantPerformance() {
  return (
    <div>
      <Container>
        <h3>Tangle Restaurant Analytics</h3>

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
          <Col sm={1}>
            {restaurants.map((restaurant) => {
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
                      <span style={{ fontSize: '12px' }}>
                        {restaurant.title}
                      </span>
                      <br />
                      <span style={{ fontSize: '20px' }}>
                        {restaurant.number}
                      </span>
                    </div>
                  </Card>
                  <hr />
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RestaurantPerformance;
