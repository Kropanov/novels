import React, {useState} from 'react'
import classes from './Pagination.module.scss'
import {Tab, Tabs} from "react-bootstrap"
import Settings from "../../Settings/Settings";

const Pagination = props => {
    const [key, setKey] = useState('home');
    
    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab
                tabClassName={props.blackTheme ? classes.TabBlackTheme : classes.TabWhiteTheme}
                eventKey="home"
                title="Закладки"
            >
                1
            </Tab>
            <Tab
                tabClassName={props.blackTheme ? classes.TabBlackTheme : classes.TabWhiteTheme}
                eventKey="profile"
                title="Библиотека"
            >
                2
            </Tab>
            <Tab
                tabClassName={props.blackTheme ? classes.TabBlackTheme : classes.TabWhiteTheme}
                eventKey="contact"
                title="Настройки"
            >
                <Settings />
            </Tab>
        </Tabs>
    );
}


export default Pagination