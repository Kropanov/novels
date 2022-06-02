import React from "react"
import classes from "./Novels.module.scss"
import Novel from "./Novel/Novel";

const Novels = props => {
    
    const cls = [
        classes.Novels,
    ]
    
    if (props.checkingTheArea) {
        cls.push(classes.NovelsFlex)
    }
    
    return (
        <div className={cls.join(" ")}>
            { props.novels.map((novel, index) => {
                return (
                    props.checkingTheArea
                    ?
                        <Novel
                            key={index}
                            image={novel.image}
                            name={novel.name}
                        />
                    :
                        <Novel
                            key={index}
                            image={novel.image}
                            name={novel.name}
                            author={novel.author}
                            description={novel.description}
                        />
                )
            })
            }
        </div>
    )
}

export default Novels