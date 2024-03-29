import React from "react"
import classes from './Footer.module.scss'
import {Link} from "react-router-dom";
import {NAME_SITE} from "../../сonstants/сonstants";

const Footer = props => {
    
    const cls_foot_cont = [
        classes.Footer
    ]
    
    props.blackTheme ? cls_foot_cont.push(classes.BlackThemeFooterContainer) : cls_foot_cont.push(classes.WhiteThemeFooterContainer)
    
    return (
        <footer className={cls_foot_cont.join(" ")}>
            <div className="container-fluid !direction !spacing">
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <ul>
                            <span>{NAME_SITE}</span>
                            <div>— Сайт может содержать материалы, не предназначенные для просмотра лицами, не достигшими 18 лет!</div>
                            <div>— Используя данный сайт, вы подтверждаете, что вам уже исполнилось 18 лет.</div>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <ul>
                            <span>Ссылки</span>
                            <Link to='/'><li>Главная</li></Link>
                            <Link to='/novels'><li>Новеллы</li></Link>
                            <Link to='/profile'><li>Профиль</li></Link>
                            <Link to='/blog'><li>Блог</li></Link>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <ul>
                            <span>Помощь</span>
                            <li>FAQ</li>
                            <li>Журнал модерации</li>
                            <li>Правила</li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <ul>
                            <span>Контакты</span>
                            <li>Для правообладателей</li>
                            <li>Обратная связь</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer