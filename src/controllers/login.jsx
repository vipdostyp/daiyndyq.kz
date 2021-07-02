import { store } from 'store';
import { setAuth } from 'store/userReducer';
import { useSelector } from 'react-redux';
import axios from 'axios';

import View from 'views/login';

const Login = () => {
    return <View onSubmit={onSubmit}/>;
}

const onSubmit = async (email, password) => {
    if(!email || !password) return {status: false, error: 'Барлық жолдарды толтырыңыз!'}
    const api = (await axios.post('/account/login', {email: email, password: password})).data;
    if(!api.status) return {status: false, error: api.description};
    return {status: true, data: api.description}
}

export default Login;