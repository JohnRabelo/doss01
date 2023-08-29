import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom' //1-5 Routing

import './index.css';
import App from './App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root')); //2-5 Routing
