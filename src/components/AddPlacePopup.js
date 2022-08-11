import PopupWithForm from './PopupWithForm.js';
import { useRef } from 'react';

export default function AddPlacePopup(props) {

    const cardNameRef = useRef();
    const cardLinkRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlace({
            name: cardNameRef.current.value,
            link: cardLinkRef.current.value,
        })
    }

    return (
        <PopupWithForm 
        title="Новое место" 
        name="add-card"
        onClose={props.onClose}
        isOpen={props.isOpen}
        popupContainerClass={'popup__container'}
        buttonText="Создать"
        onOverlayClick={props.onOverlayClick}
        onSubmit={handleSubmit}
        >
              <input 
                className="popup__input popup__input_type_new-name" 
                type="text" 
                name="name" 
                id="new-name-input"
                placeholder="Название" 
                required 
                minLength="2" 
                maxLength="30" 
                ref={cardNameRef}
              />
              <span id="new-name-input-error" className="popup__input-error"></span>
              <input 
                className="popup__input  popup__input_type_link" 
                type="url" 
                name="link" 
                id="link-input"
                placeholder="Ссылка на картинку"  
                required 
                ref={cardLinkRef}
              />
              <span id="link-input-error" className="popup__input-error"></span>
      </PopupWithForm>
    )
}