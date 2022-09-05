import Avatar from '../images/Avatar.png'

function Main() {

  function handleEditAvatarClick(){
    document.querySelector('.popup_type_avatar').classList.add('popup_opened')

  }

  function handleEditProfileClick(){
    document.querySelector('.popup_type_edit').classList.add('popup_opened')

  }

  function handleAddPlaceClick(){
    document.querySelector('.popup_type_add').classList.add('popup_opened')

  }

  return (
    <main className="main">
      <section className="profile">

        <button type="button" aria-label="Изменить аватар" onClick={handleEditAvatarClick} className="profile__avatar-btn">
          <img src={Avatar} alt="Аватар пользователя" className="profile__avatar" />
        </button>
        <div className="profile__name-container">
          <div className="profile__flex-container">
            <h1 className="profile__name">Username</h1>
            <button type="button" aria-label="Редактировать" onClick={handleEditProfileClick} className="profile__edit-btn"></button>
          </div>
          <p className="profile__about">sometext</p>
        </div>
        <button aria-label="Добавить" type="button" onClick={handleAddPlaceClick} className="profile__add-btn"></button>

      </section>
      <section className="places">

        <ul className="places__list">
        </ul>

      </section>
    </main>

  );

};
export default Main