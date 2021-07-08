import { useSelector } from 'react-redux';

const Sidebar = () => {
    const username = useSelector(state => state.user.data.username);
    console.log(username)
    return (
        <div className='sidebar'>
            <div className='sidebar-user'>
                <img src='' alt='avatar'/>
            </div>
        </div>
    );
}

export default Sidebar;