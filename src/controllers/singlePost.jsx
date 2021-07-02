import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import View from 'views/singlePost';

const SinglePost = () => {
    const [post, setPost] = useState({title: ''});
    const [comments, setComments] = useState([]);
    const [isLoading, setLoading] = useState(false);

    document.title = post.title + ' - Daiyndyq.kz';

    const { id } = useParams();

    useEffect(() => {
        const api = async () => await getPost(id, setPost, setComments, setLoading);
        api();

        return () => {
            setPost({});
            setComments([]);
            setLoading(false);
        }
    }, [id]);

    if(!isLoading) return null;
    return <View data={post} comments={comments}/>;
}

const getPost = async (id, setPost, setComments, setLoading) => {
    const queryPost = (await axios.get('/posts/' + id)).data;
    const queryComments = (await axios.get('/comments/' + id)).data;
    if(!queryPost.status) return false;
    if(!queryComments.status) return false;
    setPost(queryPost.data[0]);
    setComments(queryComments.data)
    setLoading(true);
}

export default SinglePost;