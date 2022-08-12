import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const [currentUser, updateCurrentUser] = useState({});

  const [cards, setCards] = useState([]);

  function handleCardLike(card) {

    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
        .then((newCard) => {setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(() => {
      console.log('Ошибка')
    });
  }

  function handleCardDelete(card) {
    const isOwn = card.owner._id === currentUser._id;
    if(isOwn) {
      api.removeCard(card._id)
      .then(() => {setCards((state) => state.filter((c) => c._id !==  card._id));
      })
      .catch(() => {
        console.log('Ошибка')
      })
    } else {
      console.log('Вы не можете удалить чужую карточку')
    }
  }

  useEffect(() => {
    api.getInitialCards()
    .then((res) => {
        setCards(res)
    })
    .catch(() => {
        console.log('Ошибка')
    }
    )}, []
  );

  
  useEffect(() => {
    api.getUserInfo()
        .then((result) => {
            updateCurrentUser(result)
        }
    )
        .catch(() => {
            console.log('Ошибка')
        }
    )}, []
  );

  const [selectedCard, setSelectedCard] = useState(null);
  function handleCardClick(card) {
    setSelectedCard(card)
  }

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  function handleInfoTooltipClick() {
    setInfoTooltipOpen(true)
  }

  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
    setInfoTooltipOpen(false);
  }

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      closeAllPopups()
    }
  }

  function handleUpdateUser({name, about}) {
    api.updateUserInfo({name, about})
      .then((userInfo) => {
        updateCurrentUser(userInfo);
        closeAllPopups()
      })
      .catch(() => {
        console.log('Ошибка')
    }) 
  }

  function handleUpdateAvatar({avatar}) {
    api.editProfileAvatar({avatar})
      .then((userInfo) => {
        updateCurrentUser(userInfo);
        closeAllPopups()
      })
      .catch(() => {
        console.log('Ошибка')
      })
  }

  function handleAddPlaceSubmit({name, link}) {
    api.addNewCard({name, link})
      .then((newCard) => {
        setCards([newCard, ...cards]); 
        closeAllPopups()
      })
      .catch(() => {
        console.log('Ошибка')
      })
  }


  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Switch>

          <ProtectedRoute 
            path="/main"
            loggedIn={loggedIn}
            component={Main}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />

          <Route path="/sign-in">
            <Login />
          </Route>

          <Route path="/sign-up">
            <Register 
              isOpen={handleInfoTooltipClick}
            />
          </Route>

          <Route path="*">
            {loggedIn ? <Redirect to="/main" /> : <Redirect to="/sign-in"/>}
          </Route>
          
        </Switch>
        
        <Footer />
      </div>

      <InfoTooltip
        onClose={closeAllPopups} 
        onOverlayClick={handleOverlayClick}
        isOpen={isInfoTooltipOpen}
      />

      <EditProfilePopup 
        onClose={closeAllPopups} 
        isOpen={isEditProfilePopupOpen} 
        onOverlayClick={handleOverlayClick}
        onUpdateUser={handleUpdateUser}
      />

      <AddPlacePopup
        onClose={closeAllPopups} 
        isOpen={isAddPlacePopupOpen}
        onOverlayClick={handleOverlayClick} 
        onAddPlace={handleAddPlaceSubmit}
      /> 

      <PopupWithForm 
        title="Вы уверены?" 
        name="confirm"
        popupContainerClass={'popup__confirm-container'}
        buttonText="Да"
        onOverlayClick={handleOverlayClick}
        >
      </PopupWithForm>

      <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups} 
        onOverlayClick={handleOverlayClick}
        onUpdateAvatar={handleUpdateAvatar}
      /> 

      <ImagePopup 
        onClose={closeAllPopups}
        card={selectedCard}
        onOverlayClick={handleOverlayClick}
      />
    </CurrentUserContext.Provider>
    </>
  );
}

export default App;