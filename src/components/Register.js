import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({ onRegister, infoTooltipIsOpen, updateRegisterMessage }) {

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

        onRegister(registerData)
            .then(() => {
                infoTooltipIsOpen();
                updateRegisterMessage(true);
                setRegisterData({
                    email: '',
                    password: ''
                })
            })
            .catch(() => {
                updateRegisterMessage(false);
                infoTooltipIsOpen();
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