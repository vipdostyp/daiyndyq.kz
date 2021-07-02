import {Switch, Route} from 'react-router-dom';

import axios from 'axios';

import Header from 'components/header';

import { QuestRoute } from 'core/questRoute';
import { UserRoute } from 'core/userRoute';

import Index from 'controllers/index';
import Posts from 'controllers/posts';
import SinglePost from 'controllers/singlePost';

import Login from 'controllers/login';
import Register from 'controllers/register';
import Profile from 'controllers/profile';

axios.defaults.baseURL = 'https://api.daiyndyq.kz';

const App = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route path='/posts' component={Posts}/>
                <Route path='/post/:id' component={SinglePost}/>

                <QuestRoute path='/login' component={Login}/>
                <QuestRoute path='/register' component={Register}/>

                <UserRoute path='/profile' component={Profile}/>
            </Switch>
        </div>
    );
}

export default App;