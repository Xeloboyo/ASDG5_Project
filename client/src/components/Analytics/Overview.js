import React, { Component, useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Overview(props) {
  // const title = this.props.title;
  // const number = this.props.number;

  // const overviews = [
  //   { title: 'Total Users', number: '20' },
  //   { title: 'Total Restaurants', number: '20' },
  //   { title: 'Total Community Posts', number: '20' },
  //   { title: 'Traffic Visits', number: '20' }
  // ]; static file

  const displayOverview = (props) => {
    const { overviews } = props;

    if (overviews.length > 0) {
      return overviews.map((overview, index) => {
        console.log(overview);
        return (
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
            <Card
              style={{
                width: '10rem',
                padding: '10px',
                // display: 'block'
                margin: '10px 15px'
              }}
            >
              <div className="text-center">
                <span style={{ fontSize: '12px' }} className="overview__title">
                  {overview.title}
                </span>
                <br />
                <span style={{ fontSize: '20px' }} className="overview__number">
                  {overview.number}
                </span>
              </div>
            </Card>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <Container>
        <h3 style={{ marginTop: '10px' }}>Website Overview</h3>
        {/*
        <Col sm={3}>
        <Cards />
        </Col> */}
        <Row>
          <Col sm={12}>{displayOverview(props)}</Col>
        </Row>
      </Container>
    </div>
  );
}

// export default Overview;

/*
  Share, Page Views, Ratings Given, Popularity Busiest Day, Busiest Hours
*/
