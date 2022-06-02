import React from 'react'
import classes from './SearchBox.module.scss'
import {changeSearchBoxValue, resetSearchBoxValue, searchBoxActive} from "../../../redux/actions/actions";
import {connect} from "react-redux";

const SearchBox = props => {
    
    const cls = [
        "form-control",
        classes.SearchBox
    ]

    return (
        <div className="col-xl-2 col-md-6 col-sm-5">
            <input
                className={cls.join(" ")}
                type="search"
                onFocus={props.onSearchBox}
                onBlur={() => setTimeout(() => {
                    props.onResetValue()
                    props.onSearchBox()
                }, 200)}
                placeholder="Поиск по названию"
                onChange={props.onHandleChange}
                value={props.searchBoxValue}
            />
        </div>
    )
}

function mapStateToProps(state){
    return {
        searchBoxStatus: state.isSearchBox,
        searchBoxValue: state.searchBoxValue,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSearchBox: () => dispatch(searchBoxActive()),
        onHandleChange: event => dispatch(changeSearchBoxValue(event)),
        onResetValue: () => dispatch(resetSearchBoxValue()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)