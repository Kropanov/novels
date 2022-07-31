import React from "react"
import classes from './RatingSidebarItem.module.scss'
import {Link, Outlet} from "react-router-dom";
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import {RATING_LIMIT_COUNT} from "../../../../сonstants/сonstants";


const RatingSidebarItem = props => {
    
    const cls = [
        classes.RatingNumber,
    ]
    
    if (props.count === 1) {
        cls.push(classes.Gold)
    } else if (props.count === 2) {
        cls.push(classes.Silver)
    } else if (props.count === 3) {
        cls.push(classes.Bronze)
    } else {
        cls.push(classes.Usual)
    }
    
    if (props.count <= RATING_LIMIT_COUNT) {
        return (
            <Auxiliary>
                <Link to={`/novels/${props.name}`}>
                    <div className={classes.itemRatingSideBar}>
                        <div className={cls.join(' ')}>
                            #{props.count}
                        </div>
                        <img className={classes.Image} src={ props.image } alt='Изображение' width='94px' height='94px' />
                        <div className={classes.Title}>
                            <div className={classes.Name}>
                                { props.name }
                            </div>
                            <div className={classes.Rating}>
                                Рейтинг: { props.rating }
                            </div>
                            <div className={classes.Author}>
                                Просмотров: { props.views }
                            </div>
                        </div>
                    </div>
                </Link>
                <Outlet/>
            </Auxiliary>
    )
    } else {
        return null
    }
}

export default RatingSidebarItem