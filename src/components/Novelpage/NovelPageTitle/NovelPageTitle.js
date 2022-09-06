import React, {useEffect} from 'react'
import classes from './NovelPageTitle.module.scss'
import NewsSidebar from "../../Sidebars/NewsSidebar/NewsSidebar"
import {scrollPageUp} from "../../../store/functions/functions";
import {Button} from "react-bootstrap";
import {useRouter} from "../../../hooks/Router";

const NovelPageTitle = props => {
    
    const router = useRouter()
    
    useEffect(() => {
        scrollPageUp()
    })
    
    const cls = [
        classes.colMain,
        "col-xl-9",
        "col-md-12",
    ]
    
    const cls_info = [
        classes.MainInfo
    ]
    
    if (!props.blackTheme) {
        cls_info.push(classes.WhiteThemeInfo)
    }
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={cls.join(" ")}>
                    <div className={classes.Image}>
                        <img src={ props.image }  alt='Изображение' width='260px' height='350px' />
                        <Button
                            size="lg"
                            variant={props.blackTheme ? "outline-warning" : "outline-primary"}
                            onClick={() => router.push(`/novels/${props.name}/1`)}
                        >
                            Начать читать
                        </Button>
                    </div>
                    {/* TODO may be relocate this in a new component ?*/}
                    <div className={cls_info.join(" ")}>
                        <div className={classes.Name}>
                            { props.name }
                        </div>
                        <div className={classes.Author}>
                            Автор: { props.author }
                        </div>
                        <div>
                            Рейтинг: { props.rating }
                        </div>
                        <div>
                            Просмотров: { props.views }
                        </div>
                        <div className={classes.Feedback}>
                            <div>
                                Лайков: { props.likes }
                            </div>
                            <div>
                                Дизлайков: { props.dislikes }
                            </div>
                        </div>
                        <div className={classes.Description}>
                            { props.description }
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-12">
                    <NewsSidebar blackTheme={props.blackTheme} />
                </div>
            </div>
        </div>
    )
}

export default NovelPageTitle
