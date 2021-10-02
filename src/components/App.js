import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="root">
    <Header/>
    <Main/>
    <Footer/>
    <section className="popup" id="popup-edit"> 
        <div className="popup__container popup__container_type_input"> 
           <h2 className="popup__title">Редактировать профиль</h2>  
           <form className="popup__form" action='#' name="profile-edit-form" noValidate> 
             <input className="popup__input popup__input_type_name" type="text" minLength="2" maxLength="40" required placeholder="Имя" name="name" id="name"/>
             <span className="popup__input-error" id="name-error">Ошибка</span>
             <input className="popup__input popup__input_type_job" type="text"  minLength="2" maxLength="200" required placeholder="О себе" name="description" id="description"/>
             <span className="popup__input-error" id="description-error">Ошибка</span>
             <button className="button popup__save-button" type="submit" aria-label="Сохранить">Сохранить</button> 
           </form> 
           <button className="popup__exit-button" type="button" aria-label="закрыть попап"></button>
        </div> 
    </section>
    <section className="popup" id="popup-add"> 
        <div className="popup__container popup__container_type_input"> 
           <h2 className="popup__title">Новое место</h2>  
           <form className="popup__form" action='#' name="profile-add-form" noValidate> 
             <input className="popup__input popup__input_type_name" type="text" minLength="1" maxLength="30" required placeholder="Название" name="title" id="title"/>
             <span className="popup__input-error" id="title-error">Ошибка</span>
             <input className="popup__input popup__input_type_job" type="url" required placeholder="Ссылка на картинку" name="link" id="link"/>
             <span className="popup__input-error" id="link-error">Ошибка</span>
             <button disabled className="button popup__save-button popup__save-button_disabled" type="submit" aria-label="Сохранить">Создать</button> 
           </form> 
           <button className="popup__exit-button" type="button" aria-label="закрыть попап"></button>
        </div> 
    </section>
    <section className="popup popup_type_photo" id="popup-photo"> 
        <div className="popup__container popup__container_type_photo">
            <button className="popup__exit-button" type="button" aria-label="закрыть попап"></button>
            <img className="popup__photo" src="#" alt="Изображение с карточки"/>
            <h2 className="popup__caption"></h2>
        </div> 
    </section>
    <section className="popup" id="popup-confirmation">
      <div className="popup__container popup__container_type_input">
        <h2 className="popup__title">Вы уверены?</h2>
        <form className="popup__form" action="#" name="popup-confirmation-form">
          <button  className="button popup__save-button" type="submit" aria-label="Да">Да</button>
        </form>
        <button className="popup__exit-button" type="button" aria-label="закрыть попап"></button>
        </div>
    </section>
    <section className="popup" id="avatar-update">
      <div className="popup__container popup__container_type_input">
        <h2 className="popup__title">Обновить аватар</h2>
        <form className="popup__form" action="#" name="avatar-update-form" noValidate>
            <input className="popup__input popup__input_type_avatar" type="url" required placeholder="Ссылка на картинку" name="avatar" id="avatar"/>
            <span className="popup__input-error" id="avatar-error">Ошибка</span>
            <button className="button popup__save-button" type="submit" aria-label="Сохранить">Сохранить</button>
        </form>
        <button className="popup__exit-button" type="button" aria-label="закрыть попап"></button>
      </div>
    </section>
    </div>
  );
}

export default App;
