import React, { Component } from 'react'
import Novels from "../../components/Novels/Novels";
import RatingSidebar from "../../components/Sidebars/RatingSidebar/RatingSidebar";

class Main extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-9 col-sm-12">
                        <Novels
                            novels={this.props.novels}
                            blackTheme={this.props.blackTheme}
                        />
                    </div>
                    <div className="col-xl-3 col-sm-12">
                        <RatingSidebar
                            novels={this.props.novels}
                            blackTheme={this.props.blackTheme}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main