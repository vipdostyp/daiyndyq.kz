import ErrorModal from 'components/errorModal';
import { useState } from 'react';
import './login.css';

const Login = ({loginAction}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isError, setError] = useState(false);
    const [errorDescription, setDescription] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const api = await loginAction(email, password);

        if(!api.status) {
            setError(true);
            setDescription(api.error);
        }
    }

    return (
        <section className='login-box box container'>
            {isError ? <ErrorModal description={errorDescription} close={() => setError(false)}/> : null}
            <div className='login-block'>
                <div className='login-block-title'>Сайтқа кіру</div>
                <form onSubmit={onSubmit} className='login-block-form'>
                    <input type='email' placeholder='E-mail' onChange={(e) => {setEmail(e.target.value)}}/>
                    <input type='password' placeholder='Құпия сөз' onChange={(e) => {setPassword(e.target.value)}}/>
                    <button className='button-2' type='submit'>Сайтқа кіру</button>
                </form>
            </div>
        </section>
    );
}

export default Login;