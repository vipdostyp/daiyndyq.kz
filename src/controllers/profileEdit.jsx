import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

import { store } from 'store';
import { setAuth } from 'store/userReducer';

import Cookies from 'universal-cookie';

import View from 'views/profileEdit';

const ProfileEdit = () => {
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
    return <View data={user}/>;
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

export default ProfileEdit;