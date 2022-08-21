import React from "react"
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import {NavLink} from "react-router-dom";
import MediaQuery from "react-responsive";
import './Links.module.scss'
import {
    HouseHeart,
    Book,
    PersonCircle,
    Newspaper,
    DoorOpen,
    Search
} from 'react-bootstrap-icons';

const Links = () => {
    return (
        <Auxiliary >
            <NavLink to="/">
                <HouseHeart />
                Главная
            </NavLink>
            <NavLink to="/novels">
                <Book />
                Новеллы
            </NavLink>
            <NavLink to="/profile">
                <PersonCircle />
                Профиль
            </NavLink>
            <MediaQuery query="(max-width: 576px)">
                <NavLink to="/search">
                    <Search />
                    Поиск
                </NavLink>
            </MediaQuery>
            <NavLink to="/blog">
                <Newspaper />
                Блог
            </NavLink>
            <NavLink to="/users">
                <DoorOpen />
                Вход
            </NavLink>
        </Auxiliary>
    )
}

export default Links