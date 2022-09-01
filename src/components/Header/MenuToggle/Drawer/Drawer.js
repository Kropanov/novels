import React from 'react'
import classes from './Drawer.module.scss'
import Links from "../../Navigation/Links/Links";
import {connect} from "react-redux";
import {menu} from "../../../../redux/actions/actions";
import logo from "../../../../images/logo.png";
import {NAME_SITE} from "../../../../сonstants/сonstants";

const Drawer = props => {
    
    const cls = [
        classes.Drawer,
    ]
    
    const cls_logo = [
        classes.DrawerLogo
    ]
    
    if (props.menu) {
        cls.push(classes.showDrawer)
    }
    
    props.blackTheme ? cls.push(classes.BlackTheme) : cls.push(classes.WhiteTheme)
    
    if (!props.blackTheme) {
        cls_logo.push(classes.DrawerLogoWhiteTheme)
    }
    
    return (
        <div className={cls.join(" ")}>
            <div className={cls_logo.join(" ")}>
                <img src={logo} alt="logo" width="24" height="24"/>
                <span>{NAME_SITE}</span>
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