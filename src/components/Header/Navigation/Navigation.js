import React from "react"
import classes from "./Navigation.module.scss"
import MenuToggle from "../MenuToggle/MenuToggle";
import MediaQuery from "react-responsive"
import Links from "./Links/Links";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import {menu} from "../../../redux/actions/actions";
import {connect} from "react-redux";

const Navigation = props => {
    return (
        <div className="col-xl-7 col-md-2 col-sm-3">
            <MediaQuery query="(min-width: 1200px)">
                <nav className={classes.Navigation}>
                    <Links />
                </nav>
            </MediaQuery>
            <MediaQuery query="(max-width: 1199px)">
                <div style={{margin: "0 2rem"}}>
                    <MenuToggle/>
                    {props.menu ? <Backdrop/> : null}
                </div>
            </MediaQuery>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
