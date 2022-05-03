import React from "react"
import classes from './Footer.module.scss'

const Footer = props => {
    return (
        <footer className={classes.Footer}>
            <div class="container-fluid !direction !spacing">
                <div class="row">
                    <div class="col-3">
                        <ul>
                            <span>Novels</span>
                            <li>Сайт может содержать материалы, не предназначенные для просмотра лицами, не достигшими 18 лет!</li>
                            <li>— Используя данный сайт, вы подтверждаете, что вам уже исполнилось 18 лет.</li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <ul>
                            <span>Ссылки</span>
                            <li>Главная</li>
                            <li>Новеллы</li>
                            <li>Манга</li>
                            <li>Блог</li>
                        </ul>
                    </div>
                    <div class="col-3 ">
                        <ul>
                            <span>Помощь</span>
                            <li>FAQ</li>
                            <li>Журнал модерации</li>
                            <li>Правила</li>
                        </ul>
                    </div>
                    <div class="col-3 ">
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