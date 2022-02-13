import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './assets/style.scss';
import './assets/css/main.css';
import App from './App.jsx';
import { Provider } from "react-redux"
import store from "./features/store"



const root = document.getElementById('root');


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root

);

