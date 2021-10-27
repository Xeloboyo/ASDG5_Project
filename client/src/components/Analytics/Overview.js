import React, { Component, useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Overview() {
  const [overviews, setOverviews] = useState('');

  if (overviews.length > 0) {
    return overviews.map((overview, index) => {
      console.log(overview);
      return (
        <div>
          <Container>
            <div
              style={{
                margin: '10px 15px',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                // flexWrap: 'wrap',
                verticalAlign: 'middle',
                display: 'inline-block'
                // display: 'flex'
                // marginLeft: 'auto',
                // marginRight: 'auto'
                // display: 'block'
              }}
            >
              <h3 style={{ marginTop: '10px' }}>Website Overview</h3>
              <Row>
                <Card
                  style={{
                    width: '10rem',
                    padding: '10px',
                    // display: 'block'
                    margin: '10px 15px'
                  }}
                >
                  <Col sm={12}>
                    <div className="text-center">
                      <span
                        style={{ fontSize: '12px' }}
                        className="overview__title"
                      >
                        {overview.title}
                      </span>
                      <br />
                      <span
                        style={{ fontSize: '20px' }}
                        className="overview__number"
                      >
                        {overview.number}
                      </span>
                    </div>
                  </Col>
                </Card>
              </Row>
            </div>
          </Container>
        </div>
      );
    });
  }
}
export default Overview;

/*
  Share, Page Views, Ratings Given, Popularity Busiest Day, Busiest Hours
*/
