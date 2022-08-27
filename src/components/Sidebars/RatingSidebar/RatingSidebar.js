import React from 'react'
import classes from './RatingSideBar.module.scss'
import RatingSidebarItem from './RatingSidebarItem/RatingSidebarItem'

const RatingSidebar = props => {
    
    const novels = [...props.novels]
    novels.sort((prev, next) => next.rating - prev.rating)
    
    return (
        <aside className={classes.RatingSideBar}>
            { novels.map( (novel, index) => {
                return (
                    <RatingSidebarItem
                        blackTheme={props.blackTheme}
                        key={index}
                        image={novel.image}
                        name={novel.name}
                        rating={novel.rating}
                        views={novel.views}
                        count={index+1}
                    />
                )
            })}
        </aside>
    )
}

export default RatingSidebar