import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

import { store } from 'store';
import { setAuth } from 'store/userReducer';

import Cookies from 'universal-cookie';

import View from 'views/profile';

const Profile = () => {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        getProfile(setUser, setLoading);
        
        return () => {
            setUser({});
            setLoading(false);
        };
    }, []);

    if(!isLoading) return null;
    return <View data={user} exit={exitProfile}/>;
}

const getProfile = async (setUser, setLoading) => {
    const cookies = new Cookies();
    const response = (await axios.post('/account/get/' + cookies.get('user_id'), {token: cookies.get('token')})).data

    console.log(response);

    if(response.status) {
        setUser(response.data)
        setLoading(true);
    }
}

const exitProfile = () => {
    const cookies = new Cookies();

    cookies.remove('user_id', { path: '/' });
    cookies.remove('token', { path: '/' });

    store.dispatch(setAuth(false));
}

export default Profile;