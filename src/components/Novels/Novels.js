import React from "react"
import classes from "./Novels.module.scss"
import Novel from "./Novel/Novel";

const Novels = props => {
    return (
        <div className={classes.Novels}>
            { props.novels.map((novel, index) => {
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

export default Novels