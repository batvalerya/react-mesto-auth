import React from 'react';
import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function EditProfilePopup(props) {

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
            name,
            about: description,
        });
    }

    const [name, setName] = useState('');
    function handleChangeName(evt) {
        setName(evt.target.value);
    }

    const [description, setDescription] = useState('');
    function handleChangeDescription(evt) {
        setDescription(evt.target.value)
    }

    const user = React.useContext(CurrentUserContext);
    useEffect(() => {
        setName(user.name);
        setDescription(user.about);
    }, [user]);

    return (
            <PopupWithForm 
                title="Редактировать профиль" 
                name="edit-profile"
                isOpen={props.isOpen}
                onClose={props.onClose}
                onOverlayClick={props.onOverlayClick}
                popupContainerClass={'popup__container'}
                buttonText="Сохранить"
                onSubmit={handleSubmit}>
              <input 
                  className="popup__input popup__input_type_name" 
                  type="text" 
                  id="name-input"
                  name="name" 
                  placeholder="Имя" 
                  required 
                  minLength="2" 
                  maxLength="40" 
                  value={name}
                  onChange={handleChangeName}
              />
              <span id="name-input-error" className="popup__input-error"></span>
              <input 
                  className="popup__input popup__input_type_description" 
                  type="text" 
                  name="description" 
                  placeholder="О себе"  
                  required 
                  minLength="2" 
                  maxLength="200" 
                  id="description-input"
                  value={description}
                  onChange={handleChangeDescription}
              />
              <span id="description-input-error" className="popup__input-error"></span>
            </PopupWithForm>
    )
}

    