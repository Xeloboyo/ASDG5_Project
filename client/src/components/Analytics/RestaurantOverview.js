import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const OVERVIEW = [
  { title: 'Share', number: '20' },
  { title: 'Page Views', number: '20' },
  { title: 'Ratings Given', number: '20' },
  { title: 'Popularity', number: '20' },
  { title: 'Busiest Day', number: '20' },
  { title: 'Busiest Hours', number: '20' }
];

class RestaurantOverview extends Component {
  render() {
    const title = this.props.title;
    const number = this.props.number;

    return (
      <div>
        <h3>Restaurant Overview</h3>
        <Container>
          <Card>
            <Row>
              <Col>
                {title}
                {number}
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    );
  }
}

export default RestaurantOverview;

/*
  Share, Page Views, Ratings Given, Popularity Busiest Day, Busiest Hours
*/
