export default function AuthForm(props) {
    return(
        <form className="auth-form__form" onSubmit={props.handleChangeSubmit}>
                <input 
                    className="auth-form__input auth-form__input_type_email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={props.email}
                    onChange={props.handleChange}
                />
                <span
                    id="email-error"
                    className="auth-form__input-error"
                ></span>

                <input 
                    className="auth-form__input auth-form__input_type_password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Пароль"
                    value={props.password}
                    onChange={props.handleChange}
                />
                <span
                    id="password-error"
                    className="auth-form__input-error"
                ></span>
                <button className="auth-form__submit" type="submit">{props.submitText}</button>
            </form>
    )
}