import React from 'react'
import classes from './NewsSidebarItem.module.scss'

const NewsSidebarItem = props => {
    return (
        <div className={classes.NewsSidebarItem}>
            {props.text}
        </div>
    )
}

export default NewsSidebarItem