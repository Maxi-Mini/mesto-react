function Card({card, onCardClick}){

    function handleClick() {
        onCardClick(card);
      }

    return(
        <div className="element">
            <button className="button element__delete-button" aria-label="Удалить" type="button"></button>
            <img className="element__image" onClick={handleClick} src={card.link} alt={card.title}/>
            <div className="element__info">
                <h3 className="element__title">{card.title}</h3>
                <div className="element__like">
                    <button className="button element__like-button" type="button" aria-label="кнопка лайк"></button>
                    <span className="element__like-counter">{card.likes}</span>
                </div>
            </div>
        </div>
        
    )
}

export default Card