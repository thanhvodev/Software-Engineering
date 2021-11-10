import React from 'react';
import { Container, Form, Row, Col,Button } from "react-bootstrap"

function register() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h1>Register</h1>
                    <Form>
                        <Form.Group controlId="email">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                            ></Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{marginTop:"10px"}}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default register;
