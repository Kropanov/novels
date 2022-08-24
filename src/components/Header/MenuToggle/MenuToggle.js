import React from "react"
import classes from './MenuToggle.module.scss'
import Drawer from "./Drawer/Drawer";
import {connect} from "react-redux";
import {menu} from "../../../redux/actions/actions";
import {List} from "react-bootstrap-icons"

const MenuToggle = props => {
    
    const cls = [
        classes.MenuToggle,
    ]
    
    props.blackTheme ? cls.push(classes.BlackTheme) : cls.push(classes.WhiteTheme)
    
    return (
        <div onClick={props.onMenu}>
            <div className={classes.MenuToggleFlex}>
                <List className={cls.join(" ")} />
                <Drawer blackTheme={props.blackTheme}/>
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