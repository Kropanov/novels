import React, { Component } from 'react'
import ImageGameDesigner from '../../images/GameDesigner.jpg'
import ImageWorldOnline from '../../images/WorldOnline.jpg'
import ImageGreetGy from '../../images/ReverendInsanity.jpg'
import ImageLegendaryMechanic from '../../images/LegMex.jpg'
import ImageThreeDays from '../../images/ThreeDays.jpg'
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
                    image: ImageGameDesigner,
                    like: 0,
                    dislike: 0,
                    rating: 4.2,
                    views: 31,
                },
                {
                    name: "Мир Онлайн",
                    author: "Sheng Xiao",
                    image: ImageWorldOnline,
                    like: 0,
                    dislike: 0,
                    rating: 3.9,
                    views: 53,
                },
                {
                    name: "Преподобный Гу",
                    author: "Gu Zhen Ren",
                    image: ImageGreetGy,
                    like: 0,
                    dislike: 0,
                    rating: 4.4,
                    views: 201,
                },
                {
                    name: "Легендарный механик",
                    author: "Chocolion",
                    image: ImageLegendaryMechanic,
                    like: 0,
                    dislike: 0,
                    rating: 4.3,
                    views: 73,
                },
                {
                    name: "Три дня счастья",
                    author: "Sugaru Miaki",
                    image: ImageThreeDays,
                    like: 0,
                    dislike: 0,
                    rating: 4.8,
                    views: 121,
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-9 col-sm-12">
                        <Novels novels={this.state.novels} />
                    </div>
                    <div className="col-xl-3 col-sm-12">
                        <RatingSidebar novels={this.state.novels} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main