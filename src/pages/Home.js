import React, {Component} from "react";
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Home.css';

import dog from '../assets/dogc.jpg'
import image from '../assets/homw1.png'
import reg from '../assets/register.png'
import login from '../assets/login.png'
import survey from '../assets/survey.png'

import {resetID, resetUsername, Userlogout} from "../components/CurrentUser";
import {register} from "../api";
import {Redirect} from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: '',
            userType: '',
            redirectState: false
        };
    }


    render() {
        if (this.state.redirectState === true) {
            return <Redirect to={this.state.path}/>
        }


        return (
            <div className={"home-body"}>
                <h1>Welcome to Animal Shapes!</h1>
                <Container fluid className={"home-container"}>
                    <Row className={"mx-auto"}>
                        <Col sm={6} className={"home-header"}>
                            <h1 className={"home-h1"}>Convenient Online Animal Diagnosis System</h1>
                            <h5>Animal Shapes is a tool to understand how different stakeholder groups perceive and
                                normalise flat-faced dogs, and let the researcher know whether the ideal dog they choose
                                considered health and cute. </h5>
                        </Col>
                        <Image className={"dog-logo"} src={dog} alt={"Logo"} fluid/>
                    </Row>
                </Container>
                <h2><b>Provide Feedback For These Cute Dogs.</b></h2>
                <h4>Pick up your ideal dog and get the feedback whether it has a health problem</h4>
                <img src={image} crop="fill" width="85%"/>
                <h2 className={"coreFeatures"}><b>About</b></h2>
                <div className={"home-h3"}>
                    <b>Purpose</b>
                </div>
                <div className={"features"}>
                    <h6>The purpose is to explore how much the "ideal" pug face might look the same or different to various groups of people
                        (e.g. veterinarians, dog breeders, dog owners).
                        This would be very useful as the extreme body types being selected for as 'cute' have serious health and welfare
                        impacts for animals, such as not being able to breathe normally.
                        Given that people make the breeding decisions for these dogs, understanding what "ideal" looks like to different
                        people can help us understand more about who we need to focus education or regulation efforts toward to improve dog
                        health and welfare.</h6>

                </div>
                <div className={"home-h3"}>
                    <b>Method</b>
                </div>
                <div className={"features"}>
                    <h6>This webpage collects the views of various groups of people for different dog pictures through surveys to find out which dog pictures are the perfect dogs.</h6>

                </div>


                <div className={"home-h3"}>
                    <h2 className={"coreFeatures"}><b>Guideline</b></h2>
                    <div className="pics5">
                        <div id="status3_pics">
                            <ul className="pics6_status3">

                                <li>
                                    <Image className="status3-pic" src={reg} alt={"Logo"}/>
                                    <div><b>Step 1: Register</b></div>
                                </li>
                                <li>
                                    <Image className="status3-pic" src={login} alt={"Logo"}/>
                                    <div><b>Step 2: Log In</b></div>
                                </li>
                                <li>
                                    <Image className="status3-pic" src={survey} alt={"Logo"}/>
                                    <div><b>Step 3: Survey</b></div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>










                <div className={"homeRegister"}>
                    <h2 className={"tryApp"}>Wanna try Animal Shapes? Register today!</h2>
                    <Form className={"homeform"} onSubmit={(e) => register(e, this)}>
                        <Form.Group>
                            <Form.Control id={"Username"} type="text" placeholder="Enter your Username"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control id={"password"} type="password" placeholder="Enter password"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control id={"firstname"} type="text" placeholder="Your Firstname"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control id={"lastname"} type="text" placeholder="Your Lastname"/>
                        </Form.Group>
                        <Form.Group>
                            <select id={"usertype"} className={"usertype3"}>
                                <option value="" disabled selected>User Type</option>
                                <option value="Vet">Vet</option>
                                <option value="Dog Owner">Dog Owner</option>
                                <option value="Dog Breeder">Dog Breeder</option>
                            </select>

                        </Form.Group>
                        <Button className={"register-button"} variant="primary" type="submit">
                            Get Started
                        </Button>
                    </Form>
                </div>
                <h2><b>Thank you for choosing Animal Shapes</b></h2>
            </div>
        );
    }
}

