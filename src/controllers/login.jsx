import { store } from 'store';
import { setAuth } from 'store/userReducer';

import axios from 'axios';
import Cookies from 'universal-cookie';

import View from 'views/login';

const cookies = new Cookies();

const Login = () => {
    document.title = 'Сайтқа кіру - Daiyndyq.kz';
    return <View loginAction={loginAction}/>;
}

const loginAction = async (email, password) => {
    if(!email || !password) return {status: false, error: 'Барлық жолдарды толтырыңыз!'}

    const api = (await axios.post('/account/login', {email: email, password: password})).data;

    if(api.status) {
        cookies.set('user_id', api.data.user_id, { path: '/' });
        cookies.set('token', api.data.token, { path: '/' });
        store.dispatch(setAuth(true));
        return {status: true};
    } else {
        return {status: false, error: api.description};
    }
}

export default Login;