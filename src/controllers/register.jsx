import { store } from 'store';
import { setAuth } from 'store/userReducer';

import axios from 'axios';
import Cookies from 'universal-cookie';

import View from 'views/register';

const cookies = new Cookies();

const Register = () => {
    document.title = 'Сайтқа тіркелу - Daiyndyq.kz';
    return <View registerAction={registerAction}/>;
}

const registerAction = async (email, type, password, password2) => {
    if(password !== password2) return {status: false, error: 'Құпия сөздер сәйкес келмейді!'};
    if(!email || !password || !type) return {status: false, error: 'Барлық жолдарды толтырыңыз!'};

    const api = (await axios.post('/account/register', {email: email, type_id: type, password: password})).data;

    if(api.status) {
        cookies.set('user_id', api.data.user_id, { path: '/' });
        cookies.set('token', api.data.token, { path: '/' });
        store.dispatch(setAuth(true));
        return {status: true};
    } else {
        return {status: false, error: api.description};
    }
}

export default Register;