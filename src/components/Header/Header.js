import React from 'react'
import classes from './Header.module.scss'
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

function Header() {
    return (
        <header className={classes.Header}>
            <Logo />
            <Navigation />
        </header>
    )
}

export default Header