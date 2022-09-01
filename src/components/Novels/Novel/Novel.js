import React from "react"
import classes from './Novel.module.scss'
import {Outlet, Link} from "react-router-dom";

const Novel = props => {
    
    const cls_novel_item = [
        classes.Novel
    ]
    
    props.blackTheme ? cls_novel_item.push(classes.BlackThemeNovel) : cls_novel_item.push(classes.WhiteThemeNovel)
    
    if (props.description) {
        return (
            <Link to={`/novels/${props.name}`}>
                <div className={cls_novel_item.join(" ")}>
                    <img className={classes.Image} src={ props.image } alt='Изображение' width='190px' height='260px' />
                    <div className={classes.Title}>
                            <div className={classes.Name}>
                                { props.name }
                            </div>
                        <div className={classes.Author}>
                            Автор: { props.author }
                        </div>
                        <div className={classes.Description}>
                            {/*<span>Описание:</span>*/}
                            { props.description }
                        </div>
                    </div>
                    <Outlet/>
                </div>
            </Link>
        )
    } else {
        let shortName = ""
        
        if (props.name.length < 21) {
            shortName = props.name
        } else {
            for (let i = 0; i < 19; i++) {
                shortName += props.name[i]
            }
            shortName += "..."
        }
        
        const cls_novells = [classes.NovelFromNovells]
        props.blackTheme ? cls_novells.push(classes.BlackThemeNovells) : cls_novells.push(classes.WhiteThemeNovells)
    
        return (
            <Link to={`/novels/${props.name}`}>
                <div style={{backgroundImage: `url(${props.image})`}} className={cls_novells.join(" ")}>
                    <div className={classes.Name}>
                        {shortName}
                    </div>
                </div>
                <Outlet/>
            </Link>
        )
    }
}

export default Novel
