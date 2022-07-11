import React, {useEffect} from 'react'
import classes from './NovelPageTitle.module.scss'
// import RatingSidebar from "../../Sidebars/RatingSidebar/RatingSidebar"
import NewsSidebar from "../../Sidebars/NewsSidebar/NewsSidebar"
import {scrollPageUp} from "../../../store/functions/functions";

const NovelPageTitle = props => {
    
    const cls = [
        classes.colMain,
        "col-xl-9",
        "col-md-12",
    ]
    
    useEffect(() => {
        scrollPageUp()
    })
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={cls.join(" ")}>
                    <div className={classes.Image}>
                        <img src={ props.image }  alt='Изображение' width='260px' height='350px' />
                        <button type="button" className={classes.Btn}>Начать читать</button>
                    </div>
                    {/* TODO may be relocate this in a new component ?*/}
                    <div className={classes.MainInfo}>
                        <div className={classes.Name}>
                            { props.name }
                        </div>
                        <div className={classes.Author}>
                            Автор: { props.author }
                        </div>
                        <div>
                            Рейтинг: { props.rating }
                        </div>
                        <div>
                            Просмотров: { props.views}
                        </div>
                        <div className={classes.Feedback}>
                            <div>
                                Лайков: { props.likes }
                            </div>
                            <div>
                                Дизлайков: { props.dislikes }
                            </div>
                        </div>
                        <div className={classes.Description}>
                            { props.description }
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-12">
                    <NewsSidebar/>
                </div>
            </div>
        </div>
    )
}

export default NovelPageTitle
