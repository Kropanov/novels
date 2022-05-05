import React, { Component } from 'react'
import Novels from "../../components/Novels/Novels";
import RatingSidebar from "../../components/Sidebars/RatingSidebar/RatingSidebar";

class Main extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-9 col-sm-12">
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

export default Main