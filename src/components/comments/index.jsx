import './comments.css';

const Comments = ({comments}) => {
    return (
        <div className='single-post-comments'>
            <form className='single-post-add-comment'>
                <input type='text' placeholder='Пікір мәтіні'/>
                <button className='button-2' type='submit'>Жіберу</button>
            </form>
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

export default Comments;