import ListChapters from "../../ListChapters/ListChapters"
import classes from "./ChaptersNavigationBar.module.scss"


function ChaptersNavigationBar(props) {
    
    return (
        <div className={classes.Container}>
            <ListChapters chapters={props.chapters} />
        </div>
    );
}

export default ChaptersNavigationBar