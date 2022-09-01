import React from "react"
import classes from './Logo.module.scss'
import { NavLink } from "react-router-dom"
import logo from "../../../images/logo.png"
import {NAME_SITE} from "../../../сonstants/сonstants";


const Logo = (props) => {
    return(
        <div className="col-xl-3 col-md-4 col-sm-4">
            <NavLink to='/'>
                <div className={classes.Logo}>
                    <img src={logo} alt="logo" width="24" height="24"/>
                    <span className={props.blackTheme ? classes.BlackTheme : classes.WhiteTheme}>{NAME_SITE}</span>
                </div>
            </NavLink>
        </div>
    )
}

export default Logo


