import React from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {Component} from 'react';
//import axios from 'axios';
import  { Redirect } from 'react-router-dom';
import {register} from '../api.js'
import Image from "react-bootstrap/Image";
import dog from "../assets/doga.jpg";

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
        if (this.state.redirectState === true){
            return <Redirect to={this.state.path} />
        }
        return (
            <div className={"home-body"}>
                <h1> <b>Check out Digiceipt —— it's free!</b></h1>
                <h2> Digiceipts helps users to better manage their receipts and spending online</h2>
                <Container fluid className={"home-container"}>
                    <Row className={"mx-auto"}>
                        <Col sm={6} className={"home-header"}>
                            <Card className={"home-card"}>
                                <Image className={"dog-logo"} src={dog} alt={"Logo"} fluid />
                                <Form className={"home-form"} onSubmit={(e) => register(e, this)}>
                                    <Form.Group>
                                        <Form.Control id={"Username"} type="text" placeholder="Enter your Username"/>
                                    </Form.Group>
                                    <Form.Text style={{display: "flex"}}className="text-muted">
                                        Please enter your username here.
                                    </Form.Text>

                                    <Form.Group>
                                        <Form.Control id={"password"} type="password" placeholder="Enter password"/>
                                        <Form.Text style={{display: "flex"}} className="text-muted">
                                            We'll never share your password with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control id={"firstname"} type="text" placeholder="Your Firstname"/>
                                        <Form.Text style={{display: "flex"}} className="text-muted">
                                            Please enter your first name.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control id={"lastname"} type="text" placeholder="Your Lastname"/>
                                        <Form.Text style={{display: "flex"}} className="text-muted">
                                            Please enter your last name.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group>
                                            <select id = {"usertype"} className={"usertype1"} onChange={this.handleSelectChange.bind(this)}>
                                                <option value="" disabled selected>User Type</option>
                                                <option value="Vet">Vet</option>
                                                <option value="Dog Owner">Dog Owner</option>
                                                <option value="Dog Breeder">Dog Breeder</option>
                                            </select>

                                        <Form.Text style={{display: "flex"}} className="text-muted">
                                            Please enter your User Type
                                        </Form.Text>
                                    </Form.Group>
                                    <Button className={"home-button"} variant="primary" type="submit">
                                        Get Started
                                    </Button>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }s
    handleSelectChange(e){
        let val = e.target.value
        this.setState({
            userType:val
        })
    }
}