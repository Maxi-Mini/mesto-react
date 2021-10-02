function Main(){
    const handleEditAvatarClick = () =>{
        document.querySelector('#avatar-update').classList.add('popup_opened')
    }

    const handleEditProfileClick = () =>{
        document.querySelector('#popup-edit').classList.add('popup_opened')
    }

    const handleAddPlaceClick = () =>{
        document.querySelector('#popup-add').classList.add('popup_opened')
    }

    return(
        <main className="content">
        <section className="profile">
            <div className="profile__avatar" onClick={handleEditAvatarClick}></div>
            <div className="profile__bio">
                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <p className="profile__caption">Исследователь океана</p>
                </div>
            <button className="profile__edit-button" type="button" aria-label="кнопка редактирования профиля" onClick={handleEditProfileClick}></button>
            </div>
            <button className="profile__add-button" type="button" aria-label="кнопка добавления контента" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="elements"></section>
        </main>
    )
}

export default Main
