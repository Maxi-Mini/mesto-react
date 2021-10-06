import React, {useState, useEffect} from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  
  const [selectedCard, setSelectedCard] = useState({title:'', link:''});


  const onEditProfile = () => {setIsEditProfilePopupOpen(true)};
  const onAddPlace = () => {setIsAddPlacePopupOpen(true)};
  const onEditAvatar = () => {setIsEditAvatarPopupOpen(true)};
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({title:'', link:''});
  };
  const handleCardClick = (card) => {
    setSelectedCard(card)
  };

  return (
    <div className="root">
      <Header/>
      <Main 
        handleEditProfileClick={onEditProfile}
        handleAddPlaceClick={onAddPlace}
        handleEditAvatarClick={onEditAvatar}
        handleCardClick={handleCardClick}
      />
      <Footer/>
      <PopupWithForm
        title={'Редактировать профиль'}
        name={'popup-edit'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText={'Сохранить'}>
          <input className="popup__input popup__input_type_name" type="text" minLength="2" maxLength="40" required placeholder="Имя" name="name" id="name"/>
          <span className="popup__input-error" id="name-error">Ошибка</span>
          <input className="popup__input popup__input_type_job" type="text"  minLength="2" maxLength="200" required placeholder="О себе" name="description" id="description"/>
          <span className="popup__input-error" id="description-error">Ошибка</span>
      </PopupWithForm>
      <PopupWithForm
        title={'Новое место'}
        name={'popup-add'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText={'Сохранить'}>
          <input className="popup__input popup__input_type_name" type="text" minLength="1" maxLength="30" required placeholder="Название" name="title" id="title"/>
          <span className="popup__input-error" id="title-error">Ошибка</span>
          <input className="popup__input popup__input_type_job" type="url" required placeholder="Ссылка на картинку" name="link" id="link"/>
          <span className="popup__input-error" id="link-error">Ошибка</span>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        title={'Обновить аватар'}
        name={'avatar-update'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText={'Сохранить'}>
          <input className="popup__input popup__input_type_avatar" type="url" required placeholder="Ссылка на картинку" name="avatar" id="avatar"/>
          <span className="popup__input-error" id="avatar-error">Ошибка</span>
        </PopupWithForm>
    </div>
  );
}

export default App;
