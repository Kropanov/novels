import React from "react"
import classes from './Footer.module.scss'
import {Link} from "react-router-dom";

function funcAgeAlert() {
    alert('Сайт 18+')
}

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <div className="container-fluid !direction !spacing">
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <ul>
                            <span>Novels</span>
                            <li onClick={funcAgeAlert}>— Сайт может содержать материалы, не предназначенные для просмотра лицами, не достигшими 18 лет!</li>
                            <li onClick={funcAgeAlert}>— Используя данный сайт, вы подтверждаете, что вам уже исполнилось 18 лет.</li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <ul>
                            <span>Ссылки</span>
                            <Link to='/'><li>Главная</li></Link>
                            <Link to='/novels'><li>Новеллы</li></Link>
                            <Link to='/manga'><li>Манга</li></Link>
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