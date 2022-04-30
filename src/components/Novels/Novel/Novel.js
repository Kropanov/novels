import React from "react"
import classes from './Novel.module.scss'

const Novel = props => {
    return (
        <div className={classes.Novel}>
            <img className={classes.Image} src={ props.image } alt='Изображение' width='190px' height='260px' />
            <div className={classes.Title}>
                <div className={classes.Name}>
                    { props.name }
                </div>
                <div className={classes.Author}>
                    Автор: { props.author }
                </div>
            </div>
        </div>
    )
}

export default Novel
