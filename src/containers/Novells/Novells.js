import React, {Component} from "react"
import {connect} from "react-redux"
import Novels from "../../components/Novels/Novels";

class Novells extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div style={{display: "flex", justifyContent: "center"}} className="col-9">
                        <Novels novels={this.props.novels} checkingTheArea={true}/>
                    </div>
                    <div style={{background: "darkgrey"}} className="col-3">
                        Фильтр поиска (в разработке)
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
