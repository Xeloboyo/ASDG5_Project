import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import BannerImage from './banner.png';
import ReactLogo from '../logo.svg';

var sectionStyle = {
    backgroundImage: `url(${BannerImage})`
}

class Homepage extends Component{
    render(){
        return (
            <Container className="mx-0 px-0" fluid>
                <Row>
                    <Col>
                        <Container fluid className="p-5 text-white text-center shadow-lg" style={sectionStyle} >
                            <img  src={ReactLogo} alt="React Logo" width="30%"/>
                            <p class="lead text-center">What is tangle? I dont know. We just made this to get marks. More text etc</p>
                            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container fluid className="p-5 text-white bg-dark shadow-inset" >
                            <div className="d-flex flex-row">
                                <div className="align-middle d-flex align-items-center"  style={{"margin-right": "50px"}}>
                                    <h4 className="lead">Join community and stuff</h4>          
                                </div>
                                <div  xs={2}>
                                    <Button className="p-3">
                                        Register 
                                        <span className="text-right" style={{"padding-left": "50px"}}> &gt;</span> 
                                    </Button>
                                </div>
                                <div  xs={1}>
                                    <p  className="p-3">
                                        Or
                                    </p>
                                </div>
                                <div  xs={2}>
                                    <Button  className="p-3" variant="outline-primary">
                                        Sign in  &gt;
                                    </Button>
                                </div>
                            </div>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container fluid className="p-5 bg-secondary" >
                            <Row>
                                <h2 className="display-9 fw-bold pb-3">
                                    Search for places near you..
                                </h2>
                            </Row>
                            <Row>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Bob's bakery"
                                        aria-label="Search for places"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button variant="outline-dark" id="button-addon2">
                                        Search
                                    </Button>
                                </InputGroup>
                            </Row>
                        </Container>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Container fluid className="p-5 " >
                           reviews an shit
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container fluid className="p-5 bg-dark  text-white " >
                            <Row>
                                <h3>
                                    Contact us
                                </h3>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Homepage;