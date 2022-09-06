import React from 'react'
import ListChapters from "../ListChapters/ListChapters";
import {useChapters} from "../../hooks/Chapters";

const Chapters = (props) => {
    
    const { chapter, chapters } = useChapters(props)
    
    return (
        <>
            <ListChapters chapters={chapters} />
            {
                chapter && (
                    <div style={{
                        whiteSpace: "pre-wrap",
                        color: "#AAAAAA",
                        margin: "30px auto",
                        maxWidth: "800px",
                        fontSize: "18px",
                        lineHeight: "1.6"
                    }}>
                        <h1>{chapter.title}</h1>
                        {chapter.text}
                    </div>
                )
            }
        </>
    )
}

export default Chapters