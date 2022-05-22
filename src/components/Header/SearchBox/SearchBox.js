import React from 'react'
import classes from './SearchBox.module.scss'

const SearchBox = () => {
    
    const cls = [
        "form-control",
        classes.SearchBox
    ]
    
    return (
        <div className="col-xl-2 col-md-6 col-sm-5">
            <input className={cls.join(" ")} type="text" placeholder="Поиск по названию"/>
        </div>
    )
}

export default SearchBox