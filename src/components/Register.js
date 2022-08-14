import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

function Register({ onRegister }) {

    const [registerData, setRegisterData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setRegisterData({
            ...registerData,
            [name]: value,
        })
    }

    const handleChangeSubmit = (e) => {
        e.preventDefault();

        onRegister(registerData);
    }

    return(
        <div className="auth-form"> 
            <h2 className="auth-form__title">Регистрация</h2>
            <AuthForm 
                handleChangeSubmit={handleChangeSubmit}
                handleChange={handleChange}
                email={registerData.email}
                password={registerData.password}
                submitText={'Зарегистрироваться'}
            />
            <div className="auth-form__signin">
                <Link to="/sign-in" className='auth-form__signin-link'>Уже зарегистрированы? Войти</Link>
            </div>
        </div>
    )
}

export default Register;