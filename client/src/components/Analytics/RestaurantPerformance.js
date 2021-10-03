import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Container, Row, Col, Card } from 'react-bootstrap';

const data = {
  labels: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ],
  datasets: [
    {
      label: 'Popularity',
      data: [8, 9, 15, 13, 18, 20, 15],
      backgroundColor: ['rgba(75, 192, 192, 0.2)'],
      borderColor: ['rgba(75, 192, 192, 1)'],
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
        <h3>Restaurant Performance Analytics</h3>

        <Row>
          <Col sm={9}>
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

          <Col sm={3}>
            <div>
              <div>
                <Card
                  style={{
                    width: '10rem',
                    // width: '40%',
                    marginBottom: '30px',
                    marginLeft: '150px',
                    // margin: '30px 80px',
                    padding: '15px',
                    display: 'block'
                  }}
                >
                  <div className="text-center">
                    <span style={{ fontSize: '12px' }}>name</span>
                    <br />
                    <span style={{ fontSize: '20px' }}>number</span>
                  </div>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RestaurantPerformance;
