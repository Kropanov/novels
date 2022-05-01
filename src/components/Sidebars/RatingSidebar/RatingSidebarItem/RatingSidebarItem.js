import React from "react"
import classes from './RatingSidebarItem.module.scss'

const RatingSidebarItem = props => {
    return (
        <div className={classes.itemRatingSideBar}>
            <div className={classes.RatingNumber}>
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
    )
}


export default RatingSidebarItem