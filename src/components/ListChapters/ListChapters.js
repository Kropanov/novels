import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {useRouter} from "../../hooks/Router";

function ListChapters(props) {
    
    const {chapters} = props
    const router = useRouter()
    
    return (
        <>
            <DropdownButton
                id="dropdown-button-dark-example2"
                variant="secondary"
                menuVariant="dark"
                title="Список глав"
                className="mt-2"
            >
                { chapters.map( (item, index) => (
                    <Dropdown.Item
                        key={index+1}
                        onClick={() => router.push(`/novels/${router.query.name}/${index+1}`, {replace: true} )}
                    >
                        {`Глава ${index+1} ${item.title}`}
                    </Dropdown.Item>
                ) ) }
            </DropdownButton>
        </>
    )
}

export default ListChapters