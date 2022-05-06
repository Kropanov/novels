import React from "react";
import { useParams } from 'react-router-dom'
import NovelPageTitle from './NovelPageTitle/NovelPageTitle'
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

const NovelPage = props => {
    
    const {name} = useParams();
    
    return (
        <Auxiliary>
            { props.novels.map((novel, index) => {
                return ( name === novel.name ?
                        <NovelPageTitle
                            key={index}
                            image={novel.image}
                            name={novel.name}
                            author={novel.author}
                            description={novel.description}
                            rating={novel.rating}
                            views={novel.views}
                            likes={novel.likes}
                            dislikes={novel.dislikes}
                            novels={props.novels}
                        />
                        : null
                )
            })}
        </Auxiliary>
    )
}

export default NovelPage