import { useState } from 'react';
import AuthForm from './AuthForm';

function Login({ onLogin }) {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        })
    }

    const handleChangeSubmit = (e) => {
        e.preventDefault();

        if(!loginData.email || !loginData.password) {
            return;
        } else {
            onLogin(loginData)
            .then(() => {
                setLoginData({
                    email: '',
                    password: ''
                })
            })
            .catch(() => {
                console.log('Ошибка')
            })
        }   
    }

    return(
        <div className="auth-form"> 
            <h2 className="auth-form__title">Вход</h2>
            <AuthForm 
                handleChangeSubmit={handleChangeSubmit}
                handleChange={handleChange}
                email={loginData.email}
                password={loginData.password}
                submitText={'Войти'}
            />
        </div>
    )
}

export default Login;