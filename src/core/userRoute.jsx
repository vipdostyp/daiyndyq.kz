import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import {useSelector} from  'react-redux';

export const UserRoute = ({component: Component, ...rest}) => {
    const isAuth = useSelector(state => state.user.isAuth);
    return <Route
        {...rest}
        render={(props) => {
            if(isAuth) {
                return <Component {...props}/>;
            }
            return <Redirect to={{pathname: '/login', state: {from: props.location}}} />;
        }}
    />;
}
