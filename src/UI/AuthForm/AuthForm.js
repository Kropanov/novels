import React from 'react'
import Form from 'react-bootstrap/Form'
import {Button} from "react-bootstrap"
import classes from './AuthForm.module.scss'

const AuthForm = () => {
    
    const onClickSubmit = (e) => {
        e.preventDefault()
    }
    
    return (
        <Form className={classes.AuthForm}>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Control type="password" placeholder="Password" />
            <Button
                type="submit"
                variant="primary"
                onClick={onClickSubmit}
            >
                Вход
            </Button>
        </Form>
    )
}

export default AuthForm