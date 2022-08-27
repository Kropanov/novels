import React from "react"
import classes from './RatingSidebarItem.module.scss'
import {Link, Outlet} from "react-router-dom";
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import {RATING_LIMIT_COUNT} from "../../../../сonstants/сonstants";


const RatingSidebarItem = props => {
    
    const cls_rat_num = [
        classes.RatingNumber,
    ]
    
    if (props.count === 1) {
        cls_rat_num.push(classes.Gold)
    } else if (props.count === 2) {
        cls_rat_num.push(classes.Silver)
    } else if (props.count === 3) {
        cls_rat_num.push(classes.Bronze)
    } else {
        props.blackTheme ? cls_rat_num.push(classes.BlackThemeRatingNumber) : cls_rat_num.push(classes.WhiteThemeRatingNumber)
    }
    
    
    
    const cls_item = [
        classes.itemRatingSideBar,
    ]
    
    props.blackTheme ? cls_item.push(classes.BlackTheme) : cls_item.push(classes.WhiteTheme)
    
    if (props.count <= RATING_LIMIT_COUNT) {
        return (
            <Auxiliary>
                <Link to={`/novels/${props.name}`}>
                    <div className={cls_item.join(" ")}>
                        <div className={cls_rat_num.join(" ")}>
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