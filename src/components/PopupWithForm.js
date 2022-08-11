function PopupWithForm(props) {

    return(
        <div 
            className={`popup popup_${props.name} ${props.isOpen  ? 'popup_is-opened' : ''}`}
            onClick={props.onOverlayClick}
            >
            <div className={props.popupContainerClass}>
                <button 
                    className="popup__close-button" 
                    type="button"
                    onClick={props.onClose}>
                    </button>
                <h2 className="popup__title">{props.title}</h2>
                <form 
                    className="popup__form popup__form_type_add" 
                    name={props.name} 
                    noValidate
                    onSubmit={props.onSubmit}>
                    {props.children}
                <button className="popup__submit" type="submit">{props.buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;