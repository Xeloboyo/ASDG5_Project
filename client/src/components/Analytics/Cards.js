import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Cards = () => {
  return (
    <div>
      <Container>
        <Card
          style={{
            width: '10rem',
            padding: '10px',
            // display: 'block',
            margin: '10px 15px'
          }}
        >
          <div className="text-center">
            <span style={{ fontSize: '12px' }}>name</span>
            <br />
            <span style={{ fontSize: '20px' }}>number</span>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Cards;
