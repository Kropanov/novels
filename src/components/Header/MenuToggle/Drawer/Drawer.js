import React from 'react'
import classes from './Drawer.module.scss'
import Links from "../../Navigation/Links/Links";
import {connect} from "react-redux";
import {menu} from "../../../../redux/actions/actions";

const Drawer = props => {
    
    const cls = [
        classes.Drawer,
    ]
    
    if (props.menu) {
        cls.push(classes.showDrawer)
    }
    
    return (
        <div className={cls.join(" ")}>
            <h1>Novels</h1>
            <Links />
        </div>
    )
}

function mapStateToProps(state){
    return {
        menu: state.menu,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onMenu: () => dispatch(menu()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)