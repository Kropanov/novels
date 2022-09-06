import {useRouter} from "./Router";
import {useEffect, useState} from "react";

export function useChapters(props) {
    const {novels} = props
    const router = useRouter()
    const [chapter, setChapter] = useState({})
    const [chapters, setChapters] = useState([])
    
    const getChapterById = async (novel) => {
        if (!novel) return
        return novel.chapters.find(item => item.id === +router.query.id)
    }
    
    const getNovelByName = async (novels) => {
        if (!novels) return
        return novels.find(item => item.name === router.query.name)
    }
    
    useEffect(() => {
        (async () => {
            const novel = await getNovelByName(novels)
            const chap = await getChapterById(novel)
            setChapters(novel.chapters)
            setChapter(chap)
        })()
    })
    
    return { chapter, chapters }
}