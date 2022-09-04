import React, {useEffect, useState} from 'react'
import {useRouter} from "../../hooks/Router"

const Chapters = (props) => {
    
    const {novels} = props
    const [chapter, setChapter] = useState({})
    
    const router = useRouter()
    
    const getChapterById = async () => {
        const novel = novels.find(item => item.name === router.query.name)
        return novel.chapters.find(item => item.id === +router.query.id)
    }

    useEffect(() => {
        (async () => {
            const chap = await getChapterById();
            setChapter(chap)
        })()
    })
    
    return (
        <>
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