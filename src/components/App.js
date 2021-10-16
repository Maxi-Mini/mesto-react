import React, { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {api} from '../utils/Api';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {

  // card

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getAllInfo()
      .then((res) => {
        const [cards, userInfo] = res;
        setCards(cards);
        setCurrentUser(userInfo);
      })
      .catch((err) => console.log(err));
  }, []);
  
  // like

  const handleCardLike=(card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c))
    }).catch((err) => console.log(err));
}

// delete

  const handleCardDelete=(card)=>{
    api.deleteCard(card._id).then((res)=>{
      setCards((cards)=>cards.filter((c)=>c._id !== card._id))
    }).catch((err) => console.log(err));
  }

  // popup

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const onEditProfile = () => {
    setIsEditProfilePopupOpen(true);
  };
  const onAddPlace = () => {
    setIsAddPlacePopupOpen(true);
  };
  const onEditAvatar = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ title: "", link: "" });
  };

  // selected

  const [selectedCard, setSelectedCard] = useState({ title: "", link: "" });
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  // editprofile

  const handleUpdateUser = (data) => {
    api.setUserInfo(data).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    }).catch((err) => console.log(err))
  }

  // editavatar

  const handleUpdateAvatar = (data) => {
    api.setUserAvatar(data).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    }).catch((err) => console.log(err))
  }

  //newplace

  const handleAddPlaceSubmit = (data) => {
    api.postCard(data).then((res) => {
      setCards([res, ...cards]);
      closeAllPopups();
    }).catch((err) => console.log(err))
  }

  // userinfj

  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
    id_: "",
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header />
        <Main
          handleEditProfileClick={onEditProfile}
          handleAddPlaceClick={onAddPlace}
          handleEditAvatarClick={onEditAvatar}
          handleCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          />
        
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
