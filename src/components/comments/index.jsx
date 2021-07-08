import { useState } from 'react';
import { useSelector } from 'react-redux';

import Textarea from 'react-textarea-autosize';

import './comments.css';

const Comments = ({comments}) => {
    return (
        <div className='single-post-comments'>
            <AddComment/>
            {comments.map((data, i) => (
                <Comment data={data} key={i}/>
            ))}
        </div>
    );
}

const Comment = ({data}) => {
    return (
        <div className='single-post-comment'>
            <img className='single-post-comment-avatar' src={data.avatar} alt='avatar'/>
            <div className='single-post-comment-right'>
                <div className='single-post-comment-username'>{data.username}</div>
                <div className='single-post-comment-text'>{data.text}</div>
            </div>
        </div>
    );
}

const AddComment = () => {
    const [text, setText] = useState('');
    const isAuth = useSelector(state => state.user.isAuth);

    const sendComment = (e) => {
        console.log(text)
    }

    if(!isAuth) return null;
    return (
        <div className='single-post-add-comment'>
            <Textarea placeholder='Пікір мәтіні...' onChange={(e) => setText(e.target.value)}/>
            <button className='button-2' onClick={sendComment}>Жіберу</button>
        </div>
    );
}

export default Comments;