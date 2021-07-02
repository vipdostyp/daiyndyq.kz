import Comments from 'components/comments';

import './singlePost.css';

const SinglePost = ({data, comments}) => {
    return (
        <section className='single-post-box box container'>
            <div className='single-post'>
                <img className='single-post-poster' src={data.poster} alt='poster'/>
                <div className='single-post-title'>{data.title}</div>
                <div className='single-post-text'>{data.text}</div>
                <div className='single-post-info'>
                    <div className='single-post-info-item'></div>
                </div>

                <Comments comments={comments}/>
            </div>
        </section>
    );
}

export default SinglePost;