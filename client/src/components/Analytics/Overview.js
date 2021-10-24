import React, { Component, useState } from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Overview() {
  // const title = this.props.title;
  // const number = this.props.number;
  const overviews = [
    { title: 'Total Users', number: '20' },
    { title: 'Total Restaurants', number: '20' },
    { title: 'Total Community Posts', number: '20' },
    { title: 'Traffic Visits', number: '20' }
  ];

  return (
    <div>
      <Container>
        <h3>Website Overview</h3>
        {/*
        <Col sm={3}>
        <Cards />
        </Col> */}
        <Row>
          <Col sm={12}>
            {overviews.map((overview) => {
              return (
                <div
                  style={{
                    margin: '10px 15px',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    display: 'inline-Block'
                    // display: 'block'
                  }}
                >
                  <Card
                    style={{
                      width: '10rem',
                      padding: '10px',
                      // display: 'block'
                      margin: '10px 15px'
                    }}
                  >
                    <div className="text-center">
                      <span style={{ fontSize: '12px' }}>{overview.title}</span>
                      <br />
                      <span style={{ fontSize: '20px' }}>
                        {overview.number}
                      </span>
                    </div>
                  </Card>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Overview;

/*
  Share, Page Views, Ratings Given, Popularity Busiest Day, Busiest Hours
*/
