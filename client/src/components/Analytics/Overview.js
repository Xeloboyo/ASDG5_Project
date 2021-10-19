import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Cards from './Cards';

const OVERVIEW = [
  { title: 'Share', number: '20' },
  { title: 'Page Views', number: '20' },
  { title: 'Ratings Given', number: '20' },
  { title: 'Popularity', number: '20' },
  { title: 'Busiest Day', number: '20' },
  { title: 'Busiest Hours', number: '20' }
];

class Overview extends Component {
  render() {
    // const title = this.props.title;
    // const number = this.props.number;

    return (
      <div>
        <Container>
          <h3>Website Overview</h3>
          <Row>
            {/* <div
              style={{
                margin: '10px 15px'
                // justifyContent: 'space-around'
                // alignItems: 'stretch'
              }}
            > */}
            <Col sm={3}>
              <Cards />
            </Col>
            <Col sm={3}>
              <Cards />
            </Col>
            <Col sm={3}>
              <Cards />
            </Col>
            <Col sm={3}>
              <Cards />
            </Col>
            {/* </div> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Overview;

/*
  Share, Page Views, Ratings Given, Popularity Busiest Day, Busiest Hours
*/
