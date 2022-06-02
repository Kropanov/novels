import React from 'react'
import classes from './DropdownSearchList.module.scss'
import {connect} from "react-redux";
import DropdownSearchListItem from "./DropdownSearchListItem/DropdownSearchListItem";

const DropdownSearchList = props => {
    
    const cls = [
        "translate-middle-x",
        classes.DropdownSearchList,
        "position-absolute bottom-20 start-50 translate-middle-x",
    ]
    
    const valueLowerCase = props.value.toLowerCase()
    let check = false // did value found
    
    return (
        <div className={cls.join(" ")}>
            <div className={classes.SearchList}>
                { props.novels.map((novella, index) => {
                    
                    const novellaName = novella.name
                    const novellaNameLowerCase = novellaName.toLowerCase()
                    
                    if (novellaNameLowerCase.includes(valueLowerCase)) {
                        check = true
                        return (
                            <DropdownSearchListItem
                                key={index}
                                image={novella.image}
                                name={novella.name}
                            />
                        )
                    }
                    return null
                })}
            </div>
            { check
                ? <div className={classes.Title}>Возможно, вы искали: </div>
                : <div className={classes.Title}>Ничего не найдено...</div>
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        novels: state.novels,
        value: state.searchBoxValue,
    }
}

export default connect(mapStateToProps, null)(DropdownSearchList)