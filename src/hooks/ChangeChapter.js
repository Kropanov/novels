import {useRouter} from "./Router"


export function useChangeChapter() {
    const router = useRouter()
    
    const handleChapterChange = (index) => {
        router.push(`/novels/${router.query.name}/${index+1}`, {replace: true})
    }
    
    const handleClickOnArrowRight = () => {
        router.push(`/novels/${router.query.name}/${+router.query.id+1}`, {replace: true})
    }
    
    const handleClickOnArrowLeft = () => {
        router.push(`/novels/${router.query.name}/${+router.query.id-1}`, {replace: true})
    }
    
    return {router, handleChapterChange, handleClickOnArrowRight, handleClickOnArrowLeft}
}