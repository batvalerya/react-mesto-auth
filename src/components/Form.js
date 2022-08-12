export default function Form(props) {
    return(
        <form className="register__form">
            <input 
                className="register__input register__input_type_email"
                type="email"
                name="email"
                placeholder="Email"
                required
                id="email-input"
                minLength="2"
                maxLength="40"
            />
            <span
                id="email-input-error"
                className="register__input-error"
            ></span>

            <input 
                className="register__input register__input_type_password"
                type="password"
                name="password"
                placeholder="Пароль"
                required
                id="password-input"
                minLength="2"
                maxLength="40"
            />
            <span
                id="password-input-error"
                className="register__input-error"
            ></span>
            <button className="register__submit" type="submit">{props.textSumbit}</button>
        </form> 
    )
}