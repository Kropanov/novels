import React from "react"
import classes from "./Navigation.module.scss"
import {Link} from "react-router-dom";


const Navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <Link to="/">Главная</Link>
            <Link to="/novels">Новеллы</Link>
            <Link to="/manga">Манга</Link>
            <Link to="/blog">Блог</Link>
            <Link to="/users">Вход</Link>
        </nav>
    )
}

export default Navigation