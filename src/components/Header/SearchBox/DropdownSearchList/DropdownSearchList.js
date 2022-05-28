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
    
    return (
        <div className={cls.join(" ")}>
            <div className={classes.Title}>Возможно, вы искали: </div>
            { props.novels.map((novella, index) => (
                <DropdownSearchListItem
                    key={index}
                    image={novella.image}
                    name={novella.name}
                />
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        novels: state.novels
    }
}

export default connect(mapStateToProps, null)(DropdownSearchList)