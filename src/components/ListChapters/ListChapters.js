import React, {useRef} from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {useRouter} from "../../hooks/Router";
import {ArrowLeft, ArrowRight} from "react-bootstrap-icons";
import classes from "./ListChapters.module.scss"

function ListChapters(props) {
    
    const {chapters, blackTheme} = props
    const ref = useRef(null);
    const router = useRouter()
    
    const handleChapterChange = (index) => {
        router.push(`/novels/${router.query.name}/${index+1}`, {replace: true})
    }
    
    const handleClickOnArrowRight = () => {
        if (Number(router.query.id) >= chapters.length) {
            return;
        }
        router.push(`/novels/${router.query.name}/${+router.query.id+1}`, {replace: true})
    }
    
    const handleClickOnArrowLeft = () => {
        if (Number(router.query.id) < 2) {
            return;
        }
        router.push(`/novels/${router.query.name}/${+router.query.id-1}`, {replace: true})
    }
    
    return (
        <>
            <div
                className={classes.Arrow}
                onClick={() => handleClickOnArrowLeft()}
            >
                <Button variant={blackTheme ? "dark" : "light"}>
                    <ArrowLeft />
                </Button>
            </div>
            <DropdownButton
                ref={ref}
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
                onClick={() => handleClickOnArrowRight()}
            >
                <Button variant={blackTheme ? "dark" : "light"}>
                    <ArrowRight />
                </Button>
            </div>
        </>
    )
}

export default ListChapters