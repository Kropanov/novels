import React from 'react'
import classes from './RatingSideBar.module.scss'
import RatingSidebarItem from './RatingSidebarItem/RatingSidebarItem'

const RatingSidebar = props => {
    
    // massive obj was sorted
    props.novels.sort((prev, next) => next.rating - prev.rating)
    
    let count = 1
    
    return (
        <aside className={classes.RatingSideBar}>
            { props.novels.map( (novel, index) => {
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