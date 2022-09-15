import React from 'react'
import {useChapters} from "../../hooks/Chapters";
import {Col, Container, Row} from "react-bootstrap";
import classes from "./Chapters.module.scss"
import ChaptersNavigationBar from "./ChaptersNavigationBar/ChaptersNavigationBar";

const Chapters = (props) => {
    
    const { chapter, chapters } = useChapters(props)
    
    const cls = [
        classes.Container
    ]
    
    props.blackTheme ? cls.push(classes.BlackTheme) : cls.push(classes.WhiteTheme)
    
    return (
        <Container className={cls.join(" ")}>
            <Row>
                <Col>
                    <ChaptersNavigationBar blackTheme={props.blackTheme} chapters={chapters} />
                    <h2>{chapter.title}</h2>
                    <p>{chapter.text}</p>
                    <ChaptersNavigationBar blackTheme={props.blackTheme} chapters={chapters} />
                </Col>
            </Row>
        </Container>
    )
}

export default Chapters