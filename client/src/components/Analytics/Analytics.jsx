import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Dashboard from '../dashboard/Dashboard';
// import CardAnalytics from './CardAnalytics';
// import CalendarDate from './CalendarDate';
import Overview from './Overview';
import RestaurantPerformance from './RestaurantPerformance';
import UserLists from './UserLists';
import '../../scss/style.scss';

class Analytics extends Component {
  render() {
    return (
      <div
        style={{
          // marginBottom: '150px',
          // marginLeft: '310px',
          background: 'lightgrey',
          paddingTop: '35px'
          // position: 'absolute'
          // margin: 'auto',
          // marginLeft: '220px' // start after sidebar
        }}
      >
        <div>
          <Container>
            <Row>
              {/* 0. Calendar */}
              {/* <Col xs={6}>
                <div
                  style={{
                    background: 'white',
                    // display: 'flex',
                    // marginTop: '70px',
                    // marginLeft: '210px', // to be commented out
                    paddingBottom: '50px'
                  }}
                >
                   <CalendarDate />
                </div>
              </Col> */}

              {/* 1. Website Overview*/}
              <Col>
                <div style={{ background: 'white', display: 'flex' }}>
                  <Overview />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* 2. Restaurant Analytics  */}
        <Container>
          <div style={{ background: 'white', marginTop: '30px' }}>
            <Row>
              <Col sm={10}>
                <RestaurantPerformance />
              </Col>
            </Row>
          </div>
        </Container>

        {/* 3. User Lists */}
        <Container>
          <div
            style={{
              background: 'white',
              marginTop: '30px'
            }}
          >
            <Row>
              <Col>
                <div>
                  <UserLists />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Analytics;
