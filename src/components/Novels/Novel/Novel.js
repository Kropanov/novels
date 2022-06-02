import React from "react"
import classes from './Novel.module.scss'
import {Outlet, Link} from "react-router-dom";

const Novel = props => {
    if (props.description) {
        return (
            <div className={classes.Novel}>
                <img className={classes.Image} src={ props.image } alt='Изображение' width='190px' height='260px' />
                <div className={classes.Title}>
                    <Link to={`/novels/${props.name}`}>
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
    } else {
        return (
            <Link to={`/novels/${props.name}`}>
                <div style={{backgroundImage: `url(${props.image})`}} className={classes.NovelFromNovells}>
                    <div className={classes.Name}>
                        {props.name}
                    </div>
                </div>
                <Outlet/>
            </Link>
        )
    }
}

export default Novel
