import React, {useState} from 'react'
import classes from './Pagination.module.scss'
import {Tab, Tabs} from "react-bootstrap"

const Pagination = () => {
    const [key, setKey] = useState('home');
    
    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab
                tabClassName={classes.Tab}
                eventKey="home"
                title="Закладки"
            >
                1
            </Tab>
            <Tab
                tabClassName={classes.Tab}
                eventKey="profile"
                title="Библиотека"
            >
                2
            </Tab>
            <Tab
                tabClassName={classes.Tab}
                eventKey="contact"
                title="Настройки"
            >
                3
            </Tab>
        </Tabs>
    );
}


export default Pagination