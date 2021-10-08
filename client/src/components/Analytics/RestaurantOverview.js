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
        <div>
          <h3>Restaurant Overview</h3>
          <Container>
            <Card
              style={{
                width: '10rem',
                // width: '40%',
                // marginBottom: '30px',
                // marginLeft: '50px',
                margin: '10px 50px',
                padding: '15px',
                display: 'block'
              }}
            >
              <div className="text-center">
                <span style={{ fontSize: '12px' }}>{title}name</span>
                <br />
                <span style={{ fontSize: '20px' }}>{number}number</span>
              </div>
            </Card>
          </Container>
        </div>
      </div>
    );
  }
}

export default RestaurantOverview;

/*
  Share, Page Views, Ratings Given, Popularity Busiest Day, Busiest Hours
*/
