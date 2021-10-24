import React, { Component , useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "react-datetime/css/react-datetime.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from 'react-router-dom';
import Datetime from 'react-datetime';
import moment from 'moment';


function Reservation( {date, time, people, accepted} ) {
    return (
        <Container className="p-5 bg-secondary">
            <Row>
                <Col>
                    <Container className="p-0">
                        <Row>
                            <h3 className="p-0">
                                {time}
                            </h3>

                            <h4 className="p-0">
                                {moment.isMoment(date)? date.format('Do MMM YYYY'): date}
                            </h4>
                        </Row>
                        <Row>
                            <p className="p-0">
                                {people}
                            </p>
                        </Row>
                    </Container>
                </Col>
                <Col  xs lg="2">
                    <Container className="p-0">
                        <Row>
                            <h5 className="p-0">
                                Acceptance: {accepted}
                            </h5>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Reservation;