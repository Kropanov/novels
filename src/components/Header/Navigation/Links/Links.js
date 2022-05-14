import React from "react"
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import {NavLink} from "react-router-dom";

const Links = () => {
    return (
        <Auxiliary>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/novels">Новеллы</NavLink>
            <NavLink to="/manga">Манга</NavLink>
            <NavLink to="/blog">Блог</NavLink>
            <NavLink to="/users">Вход</NavLink>
        </Auxiliary>
    )
}

export default Links