import React from "react"
import classes from "./Navigation.module.scss"
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/novels">Новеллы</NavLink>
            <NavLink to="/manga">Манга</NavLink>
            <NavLink to="/blog">Блог</NavLink>
            <NavLink to="/users">Вход</NavLink>
        </nav>
    )
}

export default Navigation