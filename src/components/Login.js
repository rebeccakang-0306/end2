import React from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {Component} from 'react';
//import axios from 'axios';
import  { Redirect } from 'react-router-dom';
import {login} from '../api.js'
import Image from "react-bootstrap/Image";
import dog from "../assets/doga.jpg";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: '',
            redirectState: false
        };
    }


    render() {
        if (this.state.redirectState === true){
            return <Redirect to={this.state.path} />
        }
        return (
            <div className={"home-body"}>
                <h1>Animal Shapes</h1>
                <h2>Sign in</h2>
                <Container fluid className={"home-container"}>
                    <Row className={"mx-auto"}>
                    <Col sm={6} className={"home-header"}>
                        <Card className={"home-card"}>
                            <Image className={"dog-logo"} src={dog} alt={"Logo"} fluid />
                            <Form className={"home-form"} onSubmit={(e) => login(e, this)}>
                                <Form.Group>
                                    <Form.Control id={"Username"} type="text" placeholder="Enter your Username"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control id={"password"} type="password" placeholder="Enter password"/>
                                    <Form.Text className="text-muted">
                                        We'll never share your password with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Button className={"home-button"} variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

