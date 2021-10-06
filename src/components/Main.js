import React, {useState, useEffect} from 'react';
import Card from './Card';
import {api} from '../utils/Api';

function Main({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick, handleCardClick}){
   
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    .catch((err) => {
      console.error(err);
    })
  }, [])

  useEffect (() => {
    api.getCards().then((res) => {
      const arr = res.map((item) => {
        return {
          likes: item.likes.length,
          title: item.name,
          link: item.link,
          id: item._id
        }
      })
      setCards(arr);
    })
    .catch((err) => {
      console.error(err);
    })
  }, [])
    

    return(
        <main className="content">
        <section className="profile">
            <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} onClick={handleEditAvatarClick}></div>
            <div className="profile__bio">
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__caption">{userDescription}</p>
                </div>
            <button className="profile__edit-button" type="button" aria-label="кнопка редактирования профиля" onClick={handleEditProfileClick}></button>
            </div>
            <button className="profile__add-button" type="button" aria-label="кнопка добавления контента" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="elements">
             {cards.map((card) => { return (<Card key={card.id} card={card} onCardClick={handleCardClick} />)})}
        </section>
        </main>
    )
}

export default Main