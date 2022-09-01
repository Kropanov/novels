import React from 'react'
import classes from './DropdownSearchListItem.module.scss'
import {Link, Outlet} from "react-router-dom";
import Auxiliary from "../../../../../hoc/Auxiliary/Auxiliary";

const DropdownSearchListItem = props => {
    
    const cls = [
        classes.DropdownSearchListItem
    ]
    
    props.blackTheme ? cls.push(classes.BlackTheme) : cls.push(classes.WhiteTheme)
    
    return (
        <Auxiliary>
            <Link to={`/novels/${props.name}`}>
                <div className={cls.join(" ")}>
                    <img src={props.image} alt="Изображение" width="64" height="64"/>
                    <div className={classes.Name}>
                        {props.name}
                    </div>
                </div>
            </Link>
            <Outlet/>
        </Auxiliary>
    )
}

export default DropdownSearchListItem