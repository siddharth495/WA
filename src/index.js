import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './component/App'
import Nav from './component/Nav';
import Rgtg from './component/page/Rgtg';
import './App.css';

ReactDOM.render(
    <BrowserRouter>
        <Nav/>
        <App/>
        <Rgtg/>
    </BrowserRouter>,

    document.querySelector('#root')
)