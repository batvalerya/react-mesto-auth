import React from 'react';
import Card from "../components/Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";


function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete}) {

    const user = React.useContext(CurrentUserContext);

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