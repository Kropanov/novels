import React from "react"
import classes from './RatingSidebarItem.module.scss'

const LIMIT = 11

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
    
    if (props.count < LIMIT) {
        return (
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
        )
    } else {
        return null
    }
}

export default RatingSidebarItem