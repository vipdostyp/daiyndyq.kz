import Sidebar from 'components/sidebar';
import Article from 'components/article';
import './posts.css';

const Posts = ({posts}) => {
    return (
        <section className='posts-box box container'>
            <div className='posts-box-list'>
                {posts.map((data, i) => (
                    <Article id={data.id} poster={data.poster} title={data.title} comments={data.comments} key={i}/>
                ))}
            </div>
            <Sidebar/>
        </section>
    );
}

export default Posts;