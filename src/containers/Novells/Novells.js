import React, {Component} from "react"
import {connect} from "react-redux"
import Novels from "../../components/Novels/Novels"
import FilterSearchSidebar from "../../components/Sidebars/FilterSearchSidebar/FilterSearchSidebar"

class Novells extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-center col-9">
                        <Novels novels={this.props.novels} checkingTheArea={true}/>
                    </div>
                    <div className="d-flex justify-content-center bg-dark col-3">
                        <FilterSearchSidebar/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        novels: state.novels
    }
}

export default connect(mapStateToProps, null)(Novells)
