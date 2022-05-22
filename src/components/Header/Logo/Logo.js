import React from "react"
import classes from './Logo.module.scss'
import { NavLink } from "react-router-dom"
import logo from "../../../images/logo.png"


const Logo = () => {
    return(
        <div className="col-xl-3 col-md-4 col-sm-4">
            <NavLink to='/'>
                <div className={classes.Logo}>
                    <img src={logo} alt="logo" width="24" height="24"/>
                    <span>Novels</span>
                </div>
            </NavLink>
        </div>
    )
}

export default Logo


