import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import STORE from './store.js'

const AppFull = App(STORE);

ReactDOM.render(<AppFull />, document.getElementById('root'));