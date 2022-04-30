import React from 'react'
import classes from './RatingSideBar.module.scss'

const RatingSidebar = props => {
    return (
        <div className={classes.RatingSideBar}>
            { props.novels.map( (novel, index) => {
                return (
                    <div className={classes.itemRatingSideBar} key={index}>
                        <img className={classes.Image} src={ novel.image } alt='Изображение' width='94px' height='94px' />
                        <div className={classes.Title}>
                            <div className={classes.Name}>
                                { novel.name }
                            </div>
                            <div className={classes.Rating}>
                                Рейтинг: { novel.rating }
                            </div>
                            <div className={classes.Author}>
                                Просмотров: { novel.views }
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default RatingSidebar