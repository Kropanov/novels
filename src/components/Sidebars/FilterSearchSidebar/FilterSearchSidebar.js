import React from 'react'
import classes from './FilterSearchSidebar.module.scss'

const FilterSearchSidebar = () => {
    return (
        <div className={classes.FilterSearchSidebar}>
            <div className="input-group mb-3">
                <label className={`input-group-text ${classes.Label}`} htmlFor="inputGroupSelect01">Жанры</label>
                <select className={`form-select ${classes.SelectInput}`} id="inputGroupSelect01">
                    <option selected>Любые</option>
                    <option value="1">Фэнтези</option>
                    <option value="2">Приключение</option>
                    <option value="3">Романтика</option>
                    <option value="4">Драма</option>
                </select>
            </div>
        </div>
    )
}

export default FilterSearchSidebar