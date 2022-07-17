import React from "react"
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import {NavLink} from "react-router-dom";
import MediaQuery from "react-responsive";

const Links = () => {
    return (
        <Auxiliary>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/novels">Новеллы</NavLink>
            <NavLink to="/profile">Профиль</NavLink>
            <MediaQuery query="(max-width: 576px)">
                <NavLink to="/search">Поиск</NavLink>
            </MediaQuery>
            <NavLink to="/blog">Блог</NavLink>
            <NavLink to="/users">Вход</NavLink>
        </Auxiliary>
    )
}

export default Links