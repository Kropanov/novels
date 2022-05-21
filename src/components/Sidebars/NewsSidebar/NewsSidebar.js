import React from 'react'
import classes from './NewsSidebar.module.scss'
import {connect} from "react-redux"
import NewsSidebarItem from "./NewsSidebarItem/NewsSidebarItem";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

// Well, may be, the sidebar components should be in the container?? (yea, this is fail)
// But this situation will be a good experience :)

const NewsSidebar = props => {
    return (
        <aside className={classes.NewsSidebar}>
            <h2 className={classes.Title}>
                Последние новости
            </h2>
            { props.news.map( (newsItem, index ) => {
                return (
                    <Auxiliary key={index}>
                        <NewsSidebarItem
                            text={newsItem.text}
                        />
                    </Auxiliary>
                )
            })}
        </aside>
    )
}

function mapStateToProps (state) {
    return {
        news: state.news
    }
}

export default connect(mapStateToProps)(NewsSidebar)