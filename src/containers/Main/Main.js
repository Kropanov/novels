import React, { Component } from 'react'
import ImageGemaDesigner from '../../images/GameDesigner.jpg'
import ImageWorldOnline from '../../images/WorldOnline.jpg'
import Novels from "../../components/Novels/Novels";
import RatingSidebar from "../../components/Sidebars/RatingSidebar/RatingSidebar";

class Main extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            novels: [
                {
                    name: "Всемогущий Геймдизайнер",
                    author: "Qing Shan Qu Zui",
                    image: ImageGemaDesigner,
                    like: 0,
                    dislike: 0,
                    rating: 4.1,
                    views: 31,
                },
                {
                    name: "Мир Онлайн",
                    author: "Sheng Xiao",
                    image: ImageWorldOnline,
                    like: 0,
                    dislike: 0,
                    rating: 4.6,
                    views: 53,
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <Novels novels={this.state.novels} />
                    </div>
                    <div className="col-lg-3">
                        <RatingSidebar novels={this.state.novels} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main