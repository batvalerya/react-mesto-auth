import { useRef } from 'react';
import PopupWithForm from './PopupWithForm.js'
export default function EditAvatarPopup(props) {

    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        })
    }

    return (
        <PopupWithForm 
        title="Обновить аватар" 
        name="edit-avatar"
        onClose={props.onClose}
        isOpen={props.isOpen}
        popupContainerClass={'popup__avatar-container'}
        buttonText="Сохранить"
        onOverlayClick={props.onOverlayClick}
        onSubmit={handleSubmit}
        >
                <input 
                  className="popup__input  popup__input_type_link" 
                  type="url" 
                  name="link" 
                  id="url-input"
                  placeholder="Ссылка на картинку" 
                  required
                  ref={avatarRef}
                />
                <span id="url-input-error" className="popup__input-error"></span>
        </PopupWithForm>
    )
}