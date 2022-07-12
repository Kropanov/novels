import React from 'react'
import classes from './Authorization.module.scss'
import AuthForm from "../../UI/AuthForm/AuthForm";

const Authorization = () => {
    return (
        <div className={classes.Authorization}>
            <div className={classes.AuthContainer}>
                <h1>Авторизация</h1>
                <AuthForm />
            </div>
        </div>
    )
}

export default Authorization