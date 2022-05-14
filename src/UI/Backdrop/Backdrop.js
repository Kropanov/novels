import React from "react"
import classes from "./Backdrop.module.scss"
import {connect} from "react-redux";
import {menu} from "../../redux/actions/actions";

const Backdrop = props => <div className={classes.Backdrop} onClick={props.onMenu} />


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

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop)