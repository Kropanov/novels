import React from 'react'
import classes from './Authorization.module.scss'
import AuthForm from "../../UI/AuthForm/AuthForm";

const Authorization = props => {
    
    const cls = [classes.AuthContainer]
    
    props.blackTheme ? cls.push(classes.BlackTheme) : cls.push(classes.WhiteTheme)
    
    return (
        <div className={classes.Authorization}>
            <div className={cls.join(" ")}>
                <h1>Авторизация</h1>
                <AuthForm />
            </div>
        </div>
    )
}

export default Authorization