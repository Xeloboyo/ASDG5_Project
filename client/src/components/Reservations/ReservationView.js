import React, { Component , useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "react-datetime/css/react-datetime.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation , Redirect} from 'react-router-dom';
import Datetime from 'react-datetime';
import moment from 'moment';
import Reservation from "./Reservation";
import {Context} from './Store'

function ReservationView() {
    const [state, dispatch] = useContext(Context);
    if(Object.keys(state.session).length === 0){
        return <Redirect to='/' />
    }
    let posts = <p>Loading...</p>;

    if (state.error) {
        posts = <p>Something went wrong: <span>{state.error}</span></p>;
    }

    const deleteThis = (id) =>{
        dispatch({type: 'REMOVE_POST', payload: id});
    }
    const updateReservationAcceptance = (id,status) =>{
        if(!id){return;}
        dispatch({type: 'UPDATE_POST', payload: {
            id: id,
            accepted: status
        }});
    }

    if (!state.error && state.posts) {
        posts = state.posts.map(post => {
            if(post && ((state.session.type == "restaurant_owner") || 
                (state.session.type != "restaurant_owner" && post.user == state.session.name))){
                return (
                    <tr>
                        <td>
                        {post.restaurant}
                        </td>
                    <td>
                <Reservation
                    date={post.date}
                    time={post.time}
                    people={post.people}
                    accepted={post.accepted}/>
                    {   
                        (state.session.type == "restaurant_owner")?
                        (<Row>
                            <Button className="btn-danger" onClick={()=>{updateReservationAcceptance(post.id, "Declined")}}> decline </Button>
                            <Button onClick={()=>{updateReservationAcceptance(post.id, "Accepted")}}> accept </Button>
                        </Row>):
                        (<Button onClick={()=>{deleteThis(post.id)}}> delete </Button>)
                    
                    }
                    </td>
                    </tr>);
            }
        });
    }
    return (
        <Container>
            <Table bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Restaurant</th>
                    <th>Reservations</th>
                </tr>
            </thead>
            <tbody>
                    {posts}
            </tbody>
            
            </Table>
        </Container>
    );
}

export default ReservationView;