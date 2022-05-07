import React from 'react'
import classes from './RatingSideBar.module.scss'
import RatingSidebarItem from './RatingSidebarItem/RatingSidebarItem'

const RatingSidebar = props => {
    
    const novels = [...props.novels]
    // massive obj was sorted
    novels.sort((prev, next) => next.rating - prev.rating)
    
    let count = 1
    
    return (
        <aside className={classes.RatingSideBar}>
            { novels.map( (novel, index) => {
                return (
                    <RatingSidebarItem
                        key={index}
                        image={novel.image}
                        name={novel.name}
                        rating={novel.rating}
                        views={novel.views}
                        count={count++}
                    />
                )
            })}
        </aside>
    )
}

export default RatingSidebar