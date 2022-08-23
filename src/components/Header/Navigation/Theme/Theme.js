import React from "react"
import {MoonStars, BrightnessHighFill} from "react-bootstrap-icons"
import classes from "./Theme.module.scss"
import {connect} from "react-redux";
import {changeTheme} from "../../../../redux/actions/actions";

const Theme = (props) => {
    
    const cls = [
        classes.ThemeIcon
    ]
    
    props.blackTheme ? cls.push(classes.BlackTheme) : cls.push(classes.WhiteTheme)
    
    return (
        <div
            className={cls.join(" ")}
            onClick={props.onChangeTheme}
        >
            {props.blackTheme ? <BrightnessHighFill /> : <MoonStars />}
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeTheme: () => dispatch(changeTheme()),
    }
}

export default connect(null, mapDispatchToProps)(Theme)