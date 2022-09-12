import React from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {ArrowLeft, ArrowRight} from "react-bootstrap-icons";
import classes from "./ListChapters.module.scss"
import {useChangeChapter} from "../../hooks/ChangeChapter";

function ListChapters(props) {
    
    const {chapters, blackTheme} = props
    const {
        router, handleChapterChange,
        handleClickOnArrowRight, handleClickOnArrowLeft
    } = useChangeChapter()
    
    return (
        <>
            <div
                className={classes.Arrow}
            >
                <Button
                    disabled={Number(router.query.id) < 2}
                    variant={blackTheme ? "dark" : "light"}
                    onClick={() => handleClickOnArrowLeft()}
                >
                    <ArrowLeft />
                </Button>
            </div>
            <DropdownButton
                id="dropdown-button-dark-example2"
                variant={blackTheme ? "dark" : "light"}
                menuVariant={blackTheme ? "dark" : "light"}
                title="Список глав"
                align="start"
            >
                { chapters.map( (item, index) => (
                    <Dropdown.Item
                        key={index+1}
                        onClick={() => handleChapterChange(index) }
                    >
                        {`Глава ${index+1} ${item.title}`}
                    </Dropdown.Item>
                ) ) }
            </DropdownButton>
            <div
                className={classes.Arrow}
            >
                <Button
                    disabled={Number(router.query.id) >= chapters.length}
                    variant={blackTheme ? "dark" : "light"}
                    onClick={() => handleClickOnArrowRight()}
                >
                    <ArrowRight />
                </Button>
            </div>
        </>
    )
}

export default ListChapters