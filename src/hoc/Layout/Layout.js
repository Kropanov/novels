import React, { Component } from "react";
import classes from './Layout.module.scss'

class Layout extends Component {
    render() {
    
        const cls = [
            classes.Layout
        ]
    
        this.props.blackTheme ? cls.push(classes.BlackTheme) : cls.push(classes.WhiteTheme)
    
        return (
            <div className={cls.join(" ")}>
                {this.props.children}
            </div>
        )
    }
}

export default Layout