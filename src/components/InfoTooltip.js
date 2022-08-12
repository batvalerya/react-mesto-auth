import infoToltipSuccess from '../images/info-tooltip-success.svg';
import infoToltipError from '../images/info-tooltip-error.svg';

function InfoTooltip(props) {
    return(
        <div 
            className={`popup ${props.isOpen  ? 'popup_is-opened' : ''}`}
            onClick={props.onOverlayClick}
            >
            <div className="popup__info-tooltip">
                <button 
                    className="popup__close-button" 
                    type="button"
                    onClick={props.onClose}
                    >
                </button>
                <div className="popup__response">
                    {/* <img className="popup__response-img" alt="Вы успешно зарегистрировались!" src={infoToltipSuccess} />
                    <h2 className="popup__response-title">Вы успешно зарегистрировались!</h2> */}

                    <img className="popup__response-img" alt="Что-то пошло не так! Попробуйте ещё раз." src={infoToltipError} />
                    <h2 className="popup__response-title">Что-то пошло не так!
Попробуйте ещё раз.</h2>

                </div>
            </div>
        </div>
    )
};

export default InfoTooltip;