import React from "react";
import { useParams, Link } from 'react-router-dom'
import classes from './NovelPage.module.scss'
import NovelPageTitle from './NovelPageTitle/NovelPageTitle'

const NovelPage = props => {
    
    const {name} = useParams();
    
    const cls = [
        classes.NovelPage,
        "container-fluid",
    ]
    
    return (
        <div className={cls.join(" ")}>
            { props.novels.map((novel) => {
                return ( name === novel.name ?
                        <NovelPageTitle
                            key={novel.id}
                            image={novel.image}
                            name={novel.name}
                            author={novel.author}
                            description={novel.description}
                            rating={novel.rating}
                            views={novel.views}
                            like={novel.like}
                            dislike={novel.dislike}
                        />
                        : null
                )
            })}
            <Link to="/">Назад</Link>
        </div>
    )
}

export default NovelPage