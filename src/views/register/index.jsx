import ErrorModal from 'components/errorModal';
import { useState } from 'react';
import './register.css';

const Register = ({registerAction}) => {
    const [email, setEmail] = useState('');
    const [type, setType] = useState('1');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const [isError, setError] = useState(false);
    const [errorDescription, setDescription] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const api = await registerAction(email, type, password, password2);

        if(!api.status) {
            setError(true);
            setDescription(api.error);
        }
    }

    return (
        <section className='login-box box container'>
            {isError ? <ErrorModal description={errorDescription} close={() => setError(false)}/> : null}
            <div className='login-block'>
                <div className='login-block-title'>Сайтқа тіркелу</div>
                <form onSubmit={onSubmit} className='login-block-form'>
                    <input type='email' placeholder='E-mail' onChange={(e) => {setEmail(e.target.value)}}/>
                    <div className='select'>
                        <select onChange={(e) => {setType(e.target.value)}}>
                            <option value='1'>Оқушы</option>
                            <option value='2'>Студент</option>
                            <option value='3'>Ұстаз</option>
                        </select>
                    </div>
                    <input type='password' placeholder='Құпия сөз' onChange={(e) => {setPassword(e.target.value)}}/>
                    <input type='password' placeholder='Құпия сөз' onChange={(e) => {setPassword2(e.target.value)}}/>
                    <button className='button-2' type='submit'>Тіркелу</button>
                </form>
            </div>
        </section>
    );
}

export default Register;