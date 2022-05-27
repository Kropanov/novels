import React from 'react'
import classes from './DropdownSearchListItem.module.scss'
import {Link, Outlet} from "react-router-dom";
import Auxiliary from "../../../../../hoc/Auxiliary/Auxiliary";

const DropdownSearchListItem = props => {
    return (
        <Auxiliary>
            <Link to={`/novels/${props.name}`}>
                <div className={classes.DropdownSearchListItem}>
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