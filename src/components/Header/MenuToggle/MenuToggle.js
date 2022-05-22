import React from "react"
import classes from './MenuToggle.module.scss'
import Drawer from "./Drawer/Drawer";
import {connect} from "react-redux";
import {menu} from "../../../redux/actions/actions";

const MenuToggle = props => {
    return (
        <div onClick={props.onMenu}>
            <div className={classes.MenuToggleFlex}>
                <svg className={classes.MenuToggle} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white"
                     viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <Drawer/>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuToggle)