import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Dashboard from '../dashboard/Dashboard';
// import CardAnalytics from './CardAnalytics';
import Calendar from './Calendar';
import RestaurantOverview from './RestaurantOverview';
import RestaurantPerformance from './RestaurantPerformance';
import '../../scss/style.scss';

class Analytics extends Component {
  render() {
    return (
      <div
        style={{
          // marginBottom: '150px',
          // marginLeft: '310px',
          background: 'lightgrey',
          paddingTop: '85px',
          // position: 'absolute'
          // margin: 'auto',
          marginLeft: '220px' // start after sidebar
        }}
      >
        <div>
          <Container>
            {/* 1. Calendar */}
            <Row>
              <Col xs={6}>
                <div
                  style={{
                    background: 'white',
                    // display: 'flex',
                    // marginTop: '70px',
                    // marginLeft: '210px', // to be commented out
                    paddingBottom: '50px'
                  }}
                >
                  <Calendar />
                </div>
              </Col>

              {/* 2. Restaurant Overview*/}
              <Col xs={6}>
                <div style={{ background: 'white', display: 'flex' }}>
                  <RestaurantOverview />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* 3. Restaurant Analytics  */}
        <Container>
          <div style={{ background: 'white', marginTop: '30px' }}>
            <Row>
              <Col sm={10}>
                <RestaurantPerformance />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Analytics;
