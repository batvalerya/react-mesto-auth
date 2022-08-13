import { useState } from 'react';

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
        <div className="register"> 
            <h2 className="register__title">Вход</h2>
            <form className="register__form" onSubmit={handleChangeSubmit}>
                <input 
                    className="register__input register__input_type_email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="email"
                    onChange={handleChange}
                    value={loginData.email}
                />
                <span
                    id="email-error"
                    className="register__input-error"
                ></span>

                <input 
                    className="register__input register__input_type_password"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    id="password"
                    onChange={handleChange}
                    value={loginData.password}
                />
                <span
                    id="password-error"
                    className="register__input-error"
                ></span>
                <button className="register__submit" type="submit">Войти</button>
            </form>
        </div>
    )
}

export default Login;