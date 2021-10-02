function PopupWithForm({title, name, children, isOpen, onClose}){
    return(
        <section className={isOpen ? 'popup popup_opened' : 'popup'} id={name}> 
        <div className="popup__container popup__container_type_input"> 
           <h2 className="popup__title">{title}</h2>  
           <form className="popup__form" action='#' name={name} noValidate>
               {children}
             <button className="button popup__save-button" type="submit" aria-label="Сохранить">Сохранить</button> 
           </form> 
           <button onClick={onClose} className="popup__exit-button" type="button" aria-label="закрыть попап"></button>
        </div> 
    </section>
    )

}

export default PopupWithForm