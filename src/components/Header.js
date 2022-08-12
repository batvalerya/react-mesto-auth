import logo from '../images/logo.svg';
import { Link, Route } from 'react-router-dom';

function Header() {
    return(
        <header className="header">
            <img src={logo} alt="Логотип" className="header__logo" />
            <Route path="/sign-up">
                <Link to="/sign-in" className='header__link'>Войти</Link>
            </Route>

            <Route path="/sign-in">
                <Link to="/sign-up" className='header__link'>Регистрация</Link>
            </Route>

            <Route path="/main">
                <div className='header__info'>
                    <a className='header__email' href="#">bat.valerya@yandex.ru</a>
                    <Link to="/" className='header__link-logout'>Выйти</Link>
                </div>
            </Route>
            
        </header>
    )
};

export default Header;