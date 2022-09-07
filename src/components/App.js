import { useEffect, useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js"
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpenm, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)

  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)

  }

  function handleCardClick(card){
    setSelectedCard(card)

  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setSelectedCard({})

  }

  return (



    <>
      <Header />
      <Main
        handleAddPlaceClick={handleAddPlaceClick}
        handleEditAvatarClick={handleEditAvatarClick}
        handleEditProfileClick={handleEditProfileClick}
        handleCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm name="edit" buttonText={'Сохранить'} onClose={closeAllPopups} isOpened={isEditProfilePopupOpen} children={
        <>
          <h2 className="popup__name">Редактировать профиль</h2>
          <input id="name" name="name" minLength="2" maxLength="40" type="text" placeholder="Имя" className="popup__input" required />
          <span className="popup__input-error name-error"></span>
          <input id="about" name="about" type="text" placeholder="Обо мне" minLength="2" maxLength="200" className="popup__input" required />
          <span className="popup__input-error about-error"></span>
        </>} />

      <PopupWithForm name="add" buttonText={'Создать'} onClose={closeAllPopups} isOpened={isAddPlacePopupOpenm} children={<>
        <h2 className="popup__name">Новое место</h2>
        <input id="place-name" name="name" type="text" className="popup__input" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="popup__input-error place-name-error"></span>
        <input id="url" name="link" type="url" className="popup__input" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error url-error"></span>
      </>} />

      <PopupWithForm buttonText={'Сохранить'} name="avatar" onClose={closeAllPopups} isOpened={isEditAvatarPopupOpen} children={<>
        <h2 className="popup__name popup__name_avatar">Обновить аватар</h2>
        <input id="avatar" name="avatar" type="url" className="popup__input" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error avatar-error"></span>
      </>} />

      <PopupWithForm buttonText={"ДА"} name="delete" onClose={closeAllPopups}/>

      <ImagePopup onClose={closeAllPopups} selectedCard={selectedCard}/>
    </>
  );
}

export default App;
