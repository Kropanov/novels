import React, { Component } from 'react'
import Novels from "../../components/Novels/Novels";
import RatingSidebar from "../../components/Sidebars/RatingSidebar/RatingSidebar";
import DropdownSearchList from '../../components/Header/SearchBox/DropdownSearchList/DropdownSearchList'
import {connect} from "react-redux";

class Main extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-9 col-sm-12 position-relative">
                        { this.props.searchBoxStatus && this.props.searchBoxValue !== ''
                            ? <DropdownSearchList />
                            : null
                        }
                        <Novels novels={this.props.novels} />
                    </div>
                    <div className="col-xl-3 col-sm-12">
                        <RatingSidebar novels={this.props.novels} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchBoxStatus: state.isSearchBox,
        searchBoxValue: state.searchBoxValue,
    }
}

export default connect(mapStateToProps, null)(Main)