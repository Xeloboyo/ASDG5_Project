import React, { Component , useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "react-datetime/css/react-datetime.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation, Link } from 'react-router-dom';
import Datetime from 'react-datetime';
import moment from 'moment';
import Reservation from "./Reservation";
import {Context} from './Store'

function ReservationAdd() {
    const location = useLocation();
    const [state, dispatch] = useContext(Context);
    const { name } = location.state
    const [date, setDate] = useState(
        moment()
    );

    const [hour, setHour] = useState(1);
    const [minute, setMinute] = useState(1);
    const [people, setPeople] = useState(1);
    const [error, setError] = useState("");

    const dateChanged = (newdate)=>{
        setDate(newdate);
    }
    const onChangeHour = (e) => setHour(e.target.value);
    const onChangeMinute = (e) => setMinute(e.target.value);
    const onChangePeople = (e) => setPeople(e.target.value);

    const hours = [];
    for(let i =1;i<=24;i++){
        hours.push(<option>{i}</option>);
    }
    const minutes = [];
    for(let i =0;i<60;i++){
        minutes.push(<option>{i<10? "0"+i:i}</option>);
    }
    const peopleOption = [];
    for(let i =1;i<=8;i++){
        peopleOption.push(<option>{i}</option>);
    }

    let posts = <p>Loading...</p>;

    if (state.error) {
        posts = <p>Something went wrong: <span>{state.error}</span></p>;
    }

    const addReservation = ()=>{
        setError("oh no");
        dispatch({type: 'ADD_POST', payload: {
            restaurant: name,
            date: date,
            time: hour+":"+(minute<10? "0"+minute:minute),
            people: people+" people, Table "+ Math.floor(Math.random() * 10)
        }});
    }

    if (!state.error && state.posts) {
        posts = state.posts.map(post => {
            return (
                <tr>
                <td>
            <Reservation
                date={post.date}
                time={post.time}
                people={post.people}
                accepted="Yes"/>
                </td>
                </tr>);
        });
        
    }

    

    return (
    <Container>
        <Row>
            <Container className="p-5">
                <h2>Reservations for {name}</h2>
            </Container>
        </Row>
        <Row>
            <th><Link to={{pathname:`/viewReservation`}}>All reservations:</Link></th>
        </Row>
        <Row>
            <Container className="p-2">
                <p>Select Date:</p>
                <Datetime timeFormat={false} id="datepicker" initialValue={date} onChange={dateChanged} />
            </Container>
        </Row>
        <Row>
            <Container className="p-2">
                <h4 className="p-0">Make Reservations</h4>
            </Container>
        </Row>
        <Row>
            <p className="alert alert-warning">{error}</p>
        </Row>
        <Row>
            <Container className="p-2">
                <Form>
                <Row className="p-0">
                <Col >
                <p className="p-0">Time:</p>
                <Row className="mb-3">
                    <Col xs lg="2">
                        <Form.Group controlId="formTime" inline>    
                            <Form.Select defaultValue="1" onChange={onChangeHour}>
                                {hours}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    :
                    <Col xs lg="2">
                        <Form.Group controlId="formTime" inline>
                            <Form.Select defaultValue="1"  onChange={onChangeMinute}>
                                {minutes}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>   
                <Button onClick={addReservation} >Add</Button>
                </Col>
                <Col >
                <p className="p-0">People:</p>
                <Row className="mb-3">
                    <Col xs lg="2">
                        <Form.Group controlId="formTime" inline>    
                            <Form.Select defaultValue="1" onChange={onChangePeople}>
                                {peopleOption}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>   
                </Col>
                </Row>
                </Form>
            </Container>
        </Row>    
        
        <Row>
            <Container className="p-2">
                <h3  className="p-0">Existing Reservations for {name}</h3>
            </Container>
        </Row>
        <Row>
            <Table bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Reservations</th>
                </tr>
            </thead>
            <tbody>
                {posts}
            </tbody>
            
            </Table>
        </Row>
    </Container>);
}
export default ReservationAdd;