import ListChapters from "../../ListChapters/ListChapters"
import classes from "./ChaptersNavigationBar.module.scss"


function ChaptersNavigationBar(props) {
    
    const cls = [
        classes.Container
    ]
    
    props.blackTheme ? cls.push(classes.BlackTheme) : cls.push(classes.WhiteTheme)
    
    return (
        <div className={cls.join(" ")}>
            <ListChapters blackTheme={props.blackTheme} chapters={props.chapters} />
        </div>
    );
}

export default ChaptersNavigationBar