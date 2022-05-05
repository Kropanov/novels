import React from "react"
import classes from "./Novels.module.scss"
import Novel from "./Novel/Novel";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

const Novels = props => {
    return (
        <div className={classes.Novels}>
            { props.novels.map((novel, index) => {
                return (
                    <Auxiliary key={index}>
                        <Novel
                            image={novel.image}
                            name={novel.name}
                            author={novel.author}
                            description={novel.description}
                        />
                    </Auxiliary>
                )
            })
            }
        </div>
    )
}

export default Novels