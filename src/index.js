import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from "./redux/app/store";


const application = (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)


createRoot(document.getElementById('root')).render(application)


reportWebVitals();
