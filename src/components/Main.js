function Main({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick, userName, userDescription, userAvatar}){
    

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
        <section className="elements"></section>
        </main>
    )
}

export default Main
