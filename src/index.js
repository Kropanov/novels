import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";
import {BrowserRouter} from 'react-router-dom'


const application = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)


createRoot(document.getElementById('root')).render(application)


reportWebVitals();
