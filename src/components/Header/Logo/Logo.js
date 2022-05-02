import React from "react"
import classes from './Logo.module.scss'
import { NavLink } from "react-router-dom"


const Logo = () => {
    return(
        <NavLink to='/'>
            <div className={classes.Logo}>
                Novels
            </div>
        </NavLink>
    )
}

export default Logo


