import React from 'react'
import classes from './NewsSidebarItem.module.scss'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {
    changeBlogId,
} from "../../../../redux/actions/actions";

const NewsSidebarItem = props => {
    
    const cls = [
        classes.NewsSidebarItem
    ]
    
    props.blackTheme ? cls.push(classes.BlackTheme) : cls.push(classes.WhiteTheme)
    
    return (
        <Link to="/blog" onClick={() => props.onChangeBlogId(props.id)}>
            <div className={cls.join(" ")}>
                {props.title}
            </div>
        </Link>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeBlogId: (index) => dispatch(changeBlogId(index)),
    }
}

export default connect(null, mapDispatchToProps)(NewsSidebarItem)