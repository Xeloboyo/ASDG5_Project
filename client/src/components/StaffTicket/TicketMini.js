import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaMotorcycle } from 'react-icons/fa';
import { GiTabletopPlayers } from 'react-icons/gi';
import { Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function TicketMini() {
  return (
    <div>
      <Container>
        <Card>
          <Row>
            <Col></Col> {/* logo */}
            <Col>
              <Col></Col> {/* name */}
              <Col></Col> {/* id */}
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default TicketMini;
