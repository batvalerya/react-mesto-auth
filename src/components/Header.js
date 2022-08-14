import logo from '../images/logo.svg';
import { Link, Route, Switch } from 'react-router-dom';

function Header({ onLogout, userData:{email} }) {
    return(
        <header className="header">
            <img src={logo} alt="Логотип" className="header__logo" />
            <Switch>
                <Route path="/sign-up">
                    <Link to="/sign-in" className='header__link'>Войти</Link>
                </Route>

                <Route path="/sign-in">
                    <Link to="/sign-up" className='header__link'>Регистрация</Link>
                </Route>

                <Route exact path="/">
                    <div className='header__info'>
                        <a className='header__email' href={`mailto:${email}`}>{email}</a>
                        <Link to="/" className='header__link-logout' onClick={() => onLogout()}>Выйти</Link>
                    </div>
                </Route>
            </Switch>   
        </header>
    )
};

export default Header;