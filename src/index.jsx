import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from 'store';
import { setAuth } from 'store/userReducer';

import Cookies from 'universal-cookie';
import axios from 'axios';

import App from 'app';
import './index.css';

async function start() {
    const cookies = new Cookies();
    const loader = document.querySelector('.loader');

    store.dispatch(setAuth(false));

    if(cookies.get('user_id') && cookies.get('token')) {
        let data = (await axios.post('/account/auth', {
            'user_id': cookies.get('user_id'),
            'token': cookies.get('token')
        })).data;
        if(data.status) store.dispatch(setAuth(true));   
    }

    setInterval(() => { 
        loader.style.opacity = '0'
        setInterval(() => loader.style.display = 'none', 500);
    }, 2000);

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </React.StrictMode>,
        document.getElementById('app')
    );
}

start();