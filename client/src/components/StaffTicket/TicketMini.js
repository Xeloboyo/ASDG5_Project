import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaMotorcycle } from 'react-icons/fa';
import { GiTabletopPlayers } from 'react-icons/gi';
import { Container, Row, Col } from 'react-bootstrap';

function TicketMini() {
  // make flexbox dynamic

  return (
    <div>
      <Container>
        <Card style={{ width: '15rem', height: '4rem' }}>
          <Row>
            <Col sm={4} style={{ marginLeft: '15px' }}>
              <IconContext.Provider value={{ color: 'purple', size: '65px' }}>
                <FaMotorcycle />
              </IconContext.Provider>
            </Col>
            <Col>
              {/* username */}
              <span style={{ fontSize: '19px' }}>User Name</span> <br />
              {/* order ID */}
              <span style={{ fontSize: '17px', color: 'grey' }}>#Order ID</span>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default TicketMini;
