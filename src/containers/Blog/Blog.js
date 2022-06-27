import React from 'react'
import {Col, Container, Nav, Row} from "react-bootstrap";
import {Tab} from "react-bootstrap";
import {connect} from "react-redux";
import classes from "./Blog.module.scss"


const Blog = props => {
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="0">
            <Container>
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-5">
                            {props.news.map((item, index) => (
                                <Nav.Item key={index} className={classes.navItem}>
                                    <Nav.Link eventKey={index}>{item.title}</Nav.Link>
                                </Nav.Item>
                            ) )}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className={classes.tabContent}>
                            {props.news.map((item, index) => (
                                <Tab.Pane key={index} eventKey={index}>
                                    <h1>{item.title}</h1>
                                    {item.text}
                                </Tab.Pane>
                            ) )}
                        </Tab.Content>
                    </Col>
                </Row>
            </Container>
        </Tab.Container>
    )
}

function mapStateToProps(state) {
    return {
        news: state.news
    }
}

export default connect(mapStateToProps, null)(Blog)