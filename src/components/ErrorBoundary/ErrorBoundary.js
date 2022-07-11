import React, { Component } from 'react'
import classes from './ErrorBoundary.module.scss'


class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            hasError: false
        }
    }
    
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    
    render() {
        if (this.state.hasError) {
            return (
                <div className={classes.ErrorBoundary}>
                    Something went wrong
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
