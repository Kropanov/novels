import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

export default function Profile() {
    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <h1>Avatar</h1>
                </Col>
                <Col>
                    <h1>Pagination</h1>
                </Col>
            </Row>
        </Container>
    )
}

