import React from 'react';
import {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'reactstrap';
import '../styles/Footer.css';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={Footer}>
                <footer className={'footer'}>
                    <Container>
                        <Row>
                            <Col>
                                <Row>Contact Us</Row>
                                <Row>Follows Us</Row>
                            </Col>
                            <Col className={"copyright"}>by Yinan Kang</Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        );
    }
}