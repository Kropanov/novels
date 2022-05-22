import React from 'react'
import MediaQuery from "react-responsive"
import classes from './Header.module.scss'
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import SearchBox from "./SearchBox/SearchBox";

function Header() {
    const cls = [
        "row",
        classes.Header,
    ]
    
    return (
        <header className="container-fluid">
            <div className={cls.join(" ")}>
                <MediaQuery query="(min-width: 576px)">
                    <Logo />
                    <SearchBox/>
                </MediaQuery>
                <Navigation />
            </div>
        </header>
    )
}

export default Header