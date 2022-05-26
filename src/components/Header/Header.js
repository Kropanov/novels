import React from 'react'
import MediaQuery from "react-responsive"
import classes from './Header.module.scss'
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import SearchBox from "./SearchBox/SearchBox";
import DropdownSearchList from "./SearchBox/DropdownSearchList/DropdownSearchList";
import {connect} from "react-redux";

function Header(props) {
    
    const cls = [
        "row",
        classes.Header,
    ]
    
    return (
        <header className="container-fluid position-relative">
            <div className={cls.join(" ")}>
                <MediaQuery query="(min-width: 576px)">
                    <Logo />
                    <SearchBox/>
                </MediaQuery>
                <Navigation />
            </div>
            { props.searchBoxStatus && props.searchBoxValue !== ''
                ? <DropdownSearchList />
                : null
            }
        </header>
    )
}

function mapStateToProps(state) {
    return {
        searchBoxStatus: state.isSearchBox,
        searchBoxValue: state.searchBoxValue,
    }
}

export default connect(mapStateToProps, null)(Header)