import { Link } from 'react-router-dom';

import './profile.css';

const Profile = ({data, exit}) => {
    return (
        <section className='profile-box box container'>
            <div className='profile-data'>
                <img className='profile-avatar' src={'https://api.daiyndyq.kz/' + data.avatar} alt='avatar'/>

                <div className='profile-info'>
                    <div className='profile-username'>{data.first_name + ' ' + data.last_name}</div>
                    <div className='profile-info-item'>Қолданушы ID: <span>{data.id}</span></div>
                    <div className='profile-info-item'>E-mail: <span>{data.email}</span></div>
                    <div className='profile-info-buttons'>
                        <Link className='button' to='/profile/edit'>Өзгерту</Link>
                        <div className='button profile-exit' onClick={exit}>Шығу</div>
                    </div>
                </div>
            </div>

            <div className='profile-aside'></div>
        </section>
    );
}

export default Profile;