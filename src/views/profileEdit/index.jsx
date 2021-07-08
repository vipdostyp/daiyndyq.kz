import { useState } from 'react';
import './profileEdit.css';

const ProfileEdit = ({data}) => {
    const [avatar, setAvatar] = useState('https://api.daiyndyq.kz/' + data.avatar);
    const [firstName, setFirstName] = useState(data.first_name);
    const [lastName, setLastName] = useState(data.last_name);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({firstName, lastName})
    }

    const changeFile = (e) => {
        try {
            setAvatar(URL.createObjectURL(e.target.files[0]));
        } catch (error) {
            return;
        }
    }

    return (
        <section className='profile-edit-box box container'>
            <form onSubmit={onSubmit} className='profile-edit-block'>
                <div className='profile-edit-avatar'>
                    <img src={avatar} alt='avatar'/>
                    <label className='profile-edit-avatar-new button' htmlFor='upload-avatar'>Жаңасын жүктеу</label>
                    <input type='file' id='upload-avatar' accept='.png,.jfif,.jpeg,.jpg,.pjp,.pjpeg' onChange={changeFile}/>
                </div>
                <div className='profile-edit-data'>
                    <div className='profile-edit-item'>
                        <label>Есіміңіз:</label>
                        <input type='text' placeholder='Есіміңіз' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className='profile-edit-item'>
                        <label>Тегіңіз:</label>
                        <input type='text' placeholder='Тегіңіз' value={lastName} onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <button className='button' type='submit'>Сақтау</button>
                </div>
            </form>
        </section>
    );
}

export default ProfileEdit;