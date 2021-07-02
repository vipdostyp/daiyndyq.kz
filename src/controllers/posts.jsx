import axios from 'axios';
import { useEffect, useState } from 'react';
import View from 'views/posts';

const Posts = () => {
    document.title = 'Жаңалықтар - Daiyndyq.kz';
    
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const api = async () => await getPosts(setPosts, setLoading);
        api();

        return () => {
            setPosts([]);
            setLoading(false);
        }
    }, []);

    if(!isLoading) return null;
    return <View posts={posts}/>;
}

const getPosts = async (setPosts, setLoading) => {
    const query = (await axios.get('/posts')).data;
    if(!query.status) return false;
    setPosts(query.data);
    setLoading(true);
}

export default Posts;