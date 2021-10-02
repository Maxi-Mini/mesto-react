function ImagePopup(){
    return(
        <section className="popup popup_type_photo" id="popup-photo"> 
        <div className="popup__container popup__container_type_photo">
            <button className="popup__exit-button" type="button" aria-label="закрыть попап"></button>
            <img className="popup__photo" src="#" alt="Изображение с карточки"/>
            <h2 className="popup__caption"></h2>
        </div> 
    </section>
    )
}

export default ImagePopup