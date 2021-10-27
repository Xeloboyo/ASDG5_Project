import React, { Component, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Dashboard from '../dashboard/Dashboard';
// import CardAnalytics from './CardAnalytics';
// import CalendarDate from './CalendarDate';
import Overview from './Overview';
import RestaurantPerformance from './RestaurantPerformance';
// import UserLists from './UserLists';
import '../../scss/style.scss';
import axios from 'axios';

export default function Analytics() {
  const [overviews, getOverviews] = useState('');
  const [restaurants, getRestaurants] = useState('');

  const url = 'http://localhost:5002/';

  useEffect(() => {
    getAllOverviews();
  }, []);

  useEffect(() => {
    getAllRestaurants();
  }, []);

  const getAllOverviews = () => {
    axios.get(`${url}overview`).then((response) => {
      const allOverviewData = response.data.overviews.allOverviewData;

      // add data to state
      getOverviews(allOverviewData);
    });
  };

  const getAllRestaurants = () => {
    axios.get(`${url}restaurants`).then((response) => {
      const allRestaurantData = response.data.restaurants.allRestaurantData;

      // add data to state
      getRestaurants(allRestaurantData);
    });
  };

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
            {/* 1. Website Overview*/}
            <Col>
              <div
                style={{
                  background: 'white',
                  display: 'flex'
                }}
              >
                <Overview overviews={overviews} />
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
              <RestaurantPerformance restaurants={restaurants} />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

// export default Analytics;
