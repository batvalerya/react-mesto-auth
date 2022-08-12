import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as userAuth from '../utils/userAuth.js';

function Register({ onRegister, isOpen }) {

    const [registerData, setRegisterData] = useState({
        email: '',
        password: ''
    });

    // const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setRegisterData({
            ...registerData,
            [name]: value,
        })
    }

    const handleChangeSubmit = (e) => {
        e.preventDefault();

        userAuth.onRegister(registerData)
            .then(() => {
                isOpen();
                // setMessage('Вы успешно зарегистрировались!');
                setRegisterData({
                    email: '',
                    password: ''
                })
            })
            .catch(() => {
                console.log('Ошибка')
                // setMessage('Что-то пошло не так! Попробуйте ещё раз.')
            });
    }

    return(
        <div className="register"> 
            <h2 className="register__title">Регистрация</h2>
            <form className="register__form" onSubmit={handleChangeSubmit}>
                <input 
                    className="register__input register__input_type_email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={registerData.email}
                    onChange={handleChange}
                />
                <span
                    id="email-error"
                    className="register__input-error"
                ></span>

                <input 
                    className="register__input register__input_type_password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Пароль"
                    value={registerData.password}
                    onChange={handleChange}
                />
                <span
                    id="password-error"
                    className="register__input-error"
                ></span>
                <button className="register__submit" type="submit">Зарегистрироваться</button>
            </form>
            <div className="register__signin">
                <Link to="/sign-in" className='register__signin-link'>Уже зарегистрированы? Войти</Link>
            </div>
        </div>
    )
}

export default Register;