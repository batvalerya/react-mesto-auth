import { Link, withRouter } from 'react-router-dom';
import Form from './Form';

function Register() {
    return(
        <div className="register"> 
            <h2 className="register__title">Регистрация</h2>
            <Form 
                textSumbit={'Зарегистрироваться'}
            />
            <div className="register__signin">
                <Link to="/sign-in" className='register__signin-link'>Уже зарегистрированы? Войти</Link>
            </div>
        </div>
    )
}

export default withRouter(Register);