import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import {useSelector} from  'react-redux';

export const QuestRoute = ({component: Component, ...rest}) => {
    const isAuth = useSelector(state => state.user.isAuth);

    return <Route
        {...rest}
        render={(props) => {
            if(isAuth) {
                return <Redirect to={{pathname: '/profile', state: {from: props.location}}} />;
            }
            return <Component {...props}/>;
        }}
    />;
}
