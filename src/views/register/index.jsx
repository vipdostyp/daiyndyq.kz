import './register.css';

const Register = () => {
    return (
        <section className='login-box box container'>
            <div className='login-block'>
                <div className='login-block-title'>Сайтқа тіркелу</div>
                <form className='login-block-form'>
                    <input type='email' placeholder='E-mail'/>
                    <select>
                        <option>Оқушы</option>
                        <option>Студент</option>
                        <option>Ұстаз</option>
                    </select>
                    <input type='password' placeholder='Құпия сөз'/>
                    <input type='password' placeholder='Құпия сөз'/>
                    <button className='button-2'>Сайтқа кіру</button>
                </form>
            </div>
        </section>
    );
}

export default Register;