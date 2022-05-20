import React from 'react'
import classes from './NovelPageTitle.module.scss'
// import RatingSidebar from "../../Sidebars/RatingSidebar/RatingSidebar"
import NewsSidebar from "../../Sidebars/NewsSidebar/NewsSidebar"

const NovelPageTitle = props => {
    
    const cls = [
        classes.colMain,
        "col-xl-9",
        "col-md-12",
    ]
    
    // TODO when navigating through a url to a dynamic page link, all adaptability styles are reset? How will I fix that? ;)
    // Now, i know what the problem is...
    
    // page scrolling on the top
    const x = 0
    const y = 0
    window.scrollTo(x, y)
    
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
                {/* TODO sidebar of news (for now sidebar of a rating)*/}
                {/*<div className="col-xl-3 col-md-12">*/}
                {/*    <RatingSidebar novels={props.novels} />*/}
                {/*</div>*/}
                <div className="col-xl-3 col-md-12">
                    <NewsSidebar/>
                </div>
            </div>
        </div>
    )
}

export default NovelPageTitle
