import React from 'react'
import classes from './FilterSearchSidebar.module.scss'

const FilterSearchSidebar = () => {
    // TODO: It will be necessary to make separate components for Label, Input and Select in order to optimize the code
    return (
        <div className={classes.FilterSearchSidebar}>
            <div className="input-group mb-2">
                <label className={`input-group-text ${classes.Label}`} htmlFor="inputGroupSelect01">Жанры</label>
                <select  defaultValue="1" className={`form-select ${classes.SelectInput}`} id="inputGroupSelect01">
                    <option value="1">Любые</option>
                    <option value="2">Фэнтези</option>
                    <option value="3">Приключение</option>
                    <option value="4">Романтика</option>
                    <option value="5">Драма</option>
                </select>
            </div>
            <div className="input-group mb-2">
                <label className={`input-group-text ${classes.Label}`} htmlFor="inputGroupSelect02">Теги</label>
                <select defaultValue="1" className={`form-select ${classes.SelectInput}`} id="inputGroupSelect02">
                    <option value="1">Любые</option>
                    <option value="2">ГГ мужчина</option>
                    <option value="3">ГГ женщина</option>
                    <option value="4">Реинкарнация</option>
                    <option value="5">Виртуальная реальность</option>
                </select>
            </div>
            <div className="input-group">
                <label className={`input-group-text ${classes.Label}`} htmlFor="inputGroupSelect03">Страна</label>
                <select defaultValue="1" className={`form-select ${classes.SelectInput}`} id="inputGroupSelect03">
                    <option value="1">Любая</option>
                    <option value="2">Китай</option>
                    <option value="3">Корея</option>
                    <option value="4">Япония</option>
                    <option value="5">США</option>
                </select>
            </div>
            <div className="d-flex align-content-center flex-column input-group">
                <div className={classes.FilterSearchTitle}>Статус перевода</div>
                <div style={{border: "none", padding: "0 0 0 12px"}} className={`input-group-text ${classes.Label}`}>
                    <input className="form-check-input mt-0 pt-0" type="checkbox" value=""
                           aria-label="Checkbox for following text input"/>
                    <span style={{marginLeft: 5}}>Продолжается</span>
                </div>
                <div style={{border: "none", padding: "0 0 0 12px"}} className={`input-group-text ${classes.Label}`}>
                    <input className="form-check-input mt-0 pt-0" type="checkbox" value=""
                           aria-label="Checkbox for following text input"/>
                    <span style={{marginLeft: 5}}>Заморожен</span>
                </div>
                <div style={{border: "none", padding: "0 0 0 12px"}} className={`input-group-text ${classes.Label}`}>
                    <input className="form-check-input mt-0 pt-0" type="checkbox" value=""
                           aria-label="Checkbox for following text input"/>
                    <span style={{marginLeft: 5}}>Завершен</span>
                </div>
                <div style={{border: "none", padding: "0 0 0 12px"}} className={`input-group-text ${classes.Label}`}>
                    <input className="form-check-input mt-0 pt-0" type="checkbox" value=""
                           aria-label="Checkbox for following text input"/>
                    <span style={{marginLeft: 5}}>Заброшен</span>
                </div>
            </div>
            <div className="btn-group mt-2" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary">Сбросить</button>
                <button type="button" className="btn btn-outline-primary">Показать</button>
            </div>
        </div>
    )
}

export default FilterSearchSidebar