import React from 'react'
import {useChapters} from "../../hooks/Chapters";
import {Col, Container, Row} from "react-bootstrap";
import classes from "./Chapters.module.scss"
import ChaptersNavigationBar from "./ChaptersNavigationBar/ChaptersNavigationBar";

const Chapters = (props) => {
    
    const { chapter, chapters } = useChapters(props)
    
    return (
        <Container className={classes.Container}>
            <Row>
                <Col>
                    <ChaptersNavigationBar chapters={chapters} />
                    <h1>{chapter.title}</h1>
                    <p>{chapter.text}</p>
                    <ChaptersNavigationBar chapters={chapters} />
                </Col>
            </Row>
        </Container>
    )
}

export default Chapters