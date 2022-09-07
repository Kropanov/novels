import React from 'react'
import ListChapters from "../ListChapters/ListChapters";
import {useChapters} from "../../hooks/Chapters";
import {Col, Container, Row} from "react-bootstrap";
import classes from "./Chapters.module.scss"

const Chapters = (props) => {
    
    const { chapter, chapters } = useChapters(props)
    
    return (
        <Container className={classes.Container}>
            <Row>
                <Col>
                    <ListChapters chapters={chapters} />
                    <h1>{chapter.title}</h1>
                    <p>{chapter.text}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Chapters