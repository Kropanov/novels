import React from 'react'
import classes from './Drawer.module.scss'
import Links from "../../Navigation/Links/Links";
import {connect} from "react-redux";
import {menu} from "../../../../redux/actions/actions";
import logo from "../../../../images/logo.png";

const Drawer = props => {
    
    const cls = [
        classes.Drawer,
    ]
    
    if (props.menu) {
        cls.push(classes.showDrawer)
    }
    
    return (
        <div className={cls.join(" ")}>
            <div className={classes.DrawerLogo}>
                <img src={logo} alt="logo" width="24" height="24"/>
                <span>Novels</span>
            </div>
            
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