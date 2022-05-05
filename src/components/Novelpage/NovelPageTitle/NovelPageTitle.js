import React from 'react'
import classes from './NovelPageTitle.scss'

const NovelPageTitle = props => {
    
    const cls = [
        classes.NovelPageTitle,
        "row",
    ]
    
    return (
        <div className={cls.join(" ")}>
            <div className="col-9">
                <img src={ props.image } alt='Изображение' width='220px' height='290px' />
            </div>
            {/* TODO sidebar of news*/}
            <div className="col-3">
            
            </div>
        </div>
    )
}

export default NovelPageTitle
