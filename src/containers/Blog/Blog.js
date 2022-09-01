import React, {useEffect} from 'react'
import {Col, Container, Nav, Row} from "react-bootstrap";
import {Tab} from "react-bootstrap";
import {connect} from "react-redux";
import classes from "./Blog.module.scss"
import {changeBlogId} from "../../redux/actions/actions";
import {scrollPageUp} from "../../store/functions/functions";

const Blog = props => {
    
    useEffect(() => {
        scrollPageUp()
        return () => {
            props.onChangeBlogId(0)
        }
    }, [props])
    
    const cls_nav = [classes.navItem]
    props.blackTheme ? cls_nav.push(classes.BlackTheme) : cls_nav.push(classes.WhiteTheme)
    
    const cls_tab = [classes.tabContent]
    props.blackTheme ? cls_tab.push(classes.BlackThemeTab) : cls_tab.push(classes.WhiteThemeTab)
    
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey={props.id}>
            <Container>
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-5">
                            {props.news.map((item, index) => (
                                <Nav.Item key={index} className={cls_nav.join(" ")}>
                                    <Nav.Link eventKey={index}>{item.title}</Nav.Link>
                                </Nav.Item>
                            ) )}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className={cls_tab.join(" ")}>
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
        news: state.news,
        id: state.blogId
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeBlogId: (index) => dispatch(changeBlogId(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)