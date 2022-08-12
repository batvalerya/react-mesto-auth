import { withRouter } from 'react-router-dom';
import Form from './Form';

function Login() {
    return(
        <div className="register"> 
            <h2 className="register__title">Вход</h2>
            <Form 
                textSumbit={'Войти'}
            />
        </div>
    )
}

export default withRouter( Login);