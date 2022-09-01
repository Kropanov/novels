import React, {  useEffect } from "react";
import classes from './Layout.module.scss'

function Layout(props) {
    
    useEffect(() => {
        if (props.blackTheme) {
            document.body.classList.add('blackTheme')
        } else {
            document.body.classList.add('whiteTheme')
        }
        return () => {
            document.body.classList.remove('blackTheme')
            document.body.classList.remove('whiteTheme')
        }
    }, [props.blackTheme])
    
    
    const cls = [
        classes.Layout
    ]

   props.blackTheme ? cls.push(classes.BlackTheme) : cls.push(classes.WhiteTheme)

    return (
        <div className={cls.join(" ")}>
            {props.children}
        </div>
    )
}

export default Layout