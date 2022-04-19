import React, { Component } from 'react'
import classes from './Header.module.scss'
import Logo from "../../components/Logo/Logo";

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }
    
    
    render() {
        return (
            <header className={classes.Header}>
                <Logo />
            </header>
        )
    }
}

export default Header