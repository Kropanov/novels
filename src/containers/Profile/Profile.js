import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Avatar from "../../components/Common/Avatar/Avatar";
import Pagination from "../../components/Common/Pagination/Pagination";

export default function Profile(props) {
    return (
        <Container>
            <Row className="mt-5 justify-content-md-center">
                <Col md={5} lg={3}>
                    <Avatar/>
                </Col>
                <Col md={7} lg={9}>
                    <Pagination blackTheme={props.blackTheme} />
                </Col>
            </Row>
        </Container>
    )
}

