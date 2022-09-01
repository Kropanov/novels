import React from 'react'
import MediaQuery from "react-responsive"
import classes from './Header.module.scss'
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import SearchBox from "./SearchBox/SearchBox";
import DropdownSearchList from "./SearchBox/DropdownSearchList/DropdownSearchList";
import {connect} from "react-redux";

function Header(props) {
    
    const {searchBoxStatus, searchBoxValue, blackTheme} = props;
    
    const cls = [
        "row",
        classes.Header,
    ]
    
    blackTheme ? cls.push(classes.BlackTheme) : cls.push(classes.WhiteTheme)
    
    return (
        <header className="container-fluid position-relative">
            <div className={cls.join(" ")}>
                <MediaQuery query="(min-width: 576px)">
                    <Logo blackTheme={blackTheme} />
                    <SearchBox blackTheme={blackTheme} />
                </MediaQuery>
                <Navigation blackTheme={blackTheme} />
            </div>
            { searchBoxStatus && searchBoxValue !== '' && (
                    <DropdownSearchList blackTheme={blackTheme} />
                )
            }
        </header>
    )
}

function mapStateToProps(state) {
    return {
        blackTheme: state.blackTheme,
        searchBoxStatus: state.isSearchBox,
        searchBoxValue: state.searchBoxValue,
    }
}

export default connect(mapStateToProps, null)(Header)