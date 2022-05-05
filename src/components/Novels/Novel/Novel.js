import React from "react"
import classes from './Novel.module.scss'
import {Outlet, Link} from "react-router-dom";

const Novel = props => {
    return (
        <div className={classes.Novel}>
            <img className={classes.Image} src={ props.image } alt='Изображение' width='190px' height='260px' />
            <div className={classes.Title}>
                <Link to={`/${props.name}`}>
                <div className={classes.Name}>
                    { props.name }
                </div>
                </Link>
                <div className={classes.Author}>
                    Автор: { props.author }
                </div>
                <div className={classes.Description}>
                    {/*<span>Описание:</span>*/}
                    { props.description }
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Novel
