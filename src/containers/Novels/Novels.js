import React, { Component } from "react"
import classes from "./Novels.module.scss"
import Novel from "../../components/Novel/Novel";
import ImageGemaDesigner from '../../images/GameDesigner.jpg'
import ImageWorldOnline from '../../images/WorldOnline.jpg'

class Novels extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            novels: [
                {
                    name: "Всемогущий Геймдизайнер",
                    author: "Qing Shan Qu Zui",
                    image: ImageGemaDesigner,
                },
                {
                    name: "Мир Онлайн",
                    author: "Sheng Xiao",
                    image: ImageWorldOnline,
                }
            ]
        }
    }
    
    render() {
        console.log(this.props.novels)
        return (
            <div className={classes.Novels}>
                { this.state.novels.map((novel, index) => {
                    return (
                        <Novel
                            image={novel.image}
                            key={index}
                            name={novel.name}
                            author={novel.author}
                        />
                    )
                })
                }
            </div>
        )
    }
}

export default Novels