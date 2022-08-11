import React from 'react';
// import { useEffect, useState } from "react";
// import { api } from "../utils/api.js";
import Card from "../components/Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";


function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete}) {

    const user = React.useContext(CurrentUserContext); 

    // const [cards, setCards] = useState([]);

    // function handleCardLike(card) {
    //     const isLiked = card.likes.some(i => i._id === user._id);

    //     api.changeLikeCardStatus(card._id, isLiked)
    //         .then((newCard) => {
    //             setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c
    //             ));
    //     });
    // }

    // function handleCardDelete(card) {
    //     const isOwn = card.owner._id === user._id;

    //     api.removeCard(card._id, isOwn)
    //         .then((cards) => {
    //             setCards(cards);
    //     })
    // }

    // useEffect(() => {
    //     api.getInitialCards()
    //     .then((res) => {
    //         setCards(res)
    //     })
    //     .catch(() => {
    //         console.log('Ошибка')
    //     }
    //     )}, []
    // );


    return(
        <main className="content">

            <section className="profile">
                <div 
                    className='profile__avatar'
                    style={{ backgroundImage: `url(${user.avatar})` }}
                    onClick={onEditAvatar}
                    ></div>
                <div className="profile__intro">
                    <div className="author">
                        <h1 className="author__name">{user.name}</h1>
                        <p className="author__profession">{user.about}</p>
                    </div>
                    <button 
                        className="profile__edit-button" 
                        type="button" 
                        onClick={onEditProfile}></button>
                </div>
                <button 
                className="profile__add-button" 
                type="button"
                onClick={onAddPlace}
                ></button>   
            </section>

            <section className="photo-gallery">
                <ul className="photo-gallery__items">
                        {cards.map((card) => {
                            return (
                                <Card 
                                    card={card} 
                                    key={card._id}
                                    onCardClick={onCardClick}
                                    onCardLike={onCardLike}
                                    onCardDelete={onCardDelete}
                                />
                            )
                        })}
                </ul>
            </section>
        </main>
    )
    
}

export default Main;