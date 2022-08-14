import infoToltipSuccess from '../images/info-tooltip-success.svg';
import infoToltipError from '../images/info-tooltip-error.svg';

function InfoTooltip(props) {
    return(
        <div 
            className={`popup ${props.isOpen && 'popup_is-opened'}`}
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
                    <img className="popup__response-img" alt={`${props.registerMessage ? props.messageSuccess : props.messageError }`} src={`${props.registerMessage ? infoToltipSuccess : infoToltipError}`} />
                    <h2 className="popup__response-title">{`${props.registerMessage ? props.messageSuccess : props.messageError }`}</h2>
                </div>
            </div>
        </div>
    )
};

export default InfoTooltip;