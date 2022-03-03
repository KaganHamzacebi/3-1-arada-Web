import React from "react";
import Header from "../../components/Header";
import 'react-bootstrap';
import {Col, Container, Row} from "react-bootstrap";

export default function MyComponent() {
    return (
        <div id="sleepWrapper">
            <Header/>
            <div className="pt-48 pb-40 md:pt-60 px-8 md:px-24">
                <Container>
                    <Row>
                        <Col md={6}> 1</Col>
                        <Col md={6}>
                            <Row>
                                <Col>
                                    2
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    3
                                </Col>
                                <Col>
                                    4
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

