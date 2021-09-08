import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Dashboard from '../dashboard/Dashboard';
import CardAnalytics from '../cards/CardAnalytics';
import RestaurantPerformance from '../graph/RestaurantPerformance';
import RestaurantRevenue from '../graph/RestaurantRevenue';
import '../../scss/style.scss';

class BusinessPro extends Component {
  render() {
    return (
      <div>
        &nbsp; <br />
        <div
          style={{
            marginBottom: '150px',
            marginLeft: '310px'
          }}
        >
          <Container className="text-center">
            <div style={{ background: 'lightgrey' }}>
              <h3 style={{ marginTop: '100px' }}>Restaurant Overview</h3>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: '70px',
                  marginBottom: '50px'
                }}
              >
                <CardAnalytics />
                <CardAnalytics />
                <CardAnalytics />
                <CardAnalytics />
              </div>
            </div>
            <Container>
              <h3>Restaurant Income Revenue</h3>
              <h5>Filter: This Week</h5>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  margin: '15px'
                }}
              >
                <RestaurantRevenue />
              </div>
            </Container>
            <Container style={{ marginTop: '50px' }}>
              <h3>Restaurant Performance Analytics</h3>
              <h5>Filter: This Week</h5>
              <Row>
                <Col sm={10}>
                  <RestaurantPerformance />
                </Col>
                <Col sm={1}>
                  <div
                    style={{
                      justifyContent: 'space-between',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <CardAnalytics />
                    <CardAnalytics />
                    <CardAnalytics />
                    <CardAnalytics />
                    <CardAnalytics />
                  </div>
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
      </div>
    );
  }
}

export default BusinessPro;
