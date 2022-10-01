import { useEffect, useState, } from "react";
import { BrowserRouter, Route, Redirect, Routes } from 'react-router-dom';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js"
import ImagePopup from "./ImagePopup.js";
import api from "../utils/Api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import Login from "./Login.js";
import Register from "./Register.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpenm, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([])

  const getUser = api.getProfile()
  const getCards = api.getInitialCards()

  useEffect(() => {
    Promise.all([getUser, getCards])
      .then(([userData, cards]) => {

        setCurrentUser(userData)
        setCards(cards)

      }).catch(err => console.log(err))

  }, [])

  function handleCardDelete(card) {
    api.deleteCardById(card._id).then(() => {
      setCards((state) => state.filter((c) => {
        return c._id !== card._id
      }));
    })
      .catch(err => console.log(err))

  }

  function handleCardLike(card) {

    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeCardLikeStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(err))
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)

  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)

  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)

  }

  function handleCardClick(card) {
    setSelectedCard(card)

  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setSelectedCard({})

  }

  function addPlace(data) {
    api.createCard(data)
      .then(res => {
        setCards([res, ...cards])
        closeAllPopups()
      })
      .catch(err => console.log(err))

  }

  function editProfile({ name, about }) {
    api.editProfile({ name, about })
      .then(newData => {
        setCurrentUser(newData)
        closeAllPopups()
      })
      .catch(err => console.log(err))

  }

  function changeAvatar({ avatar }) {
    api.changeAvatar({ avatar })
      .then(newData => {
        setCurrentUser(newData)
        closeAllPopups()
      })
      .catch(err => console.log(err))

  }

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />

        <Routes>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <Main
              handleAddPlaceClick={handleAddPlaceClick}
              handleEditAvatarClick={handleEditAvatarClick}
              handleEditProfileClick={handleEditProfileClick}
              handleCardClick={handleCardClick}
              cards={cards}
              onCardDelete={handleCardDelete}
              onCardLike={handleCardLike}
            />
          } />
        </Routes>
        {/* <Main
          handleAddPlaceClick={handleAddPlaceClick}
          handleEditAvatarClick={handleEditAvatarClick}
          handleEditProfileClick={handleEditProfileClick}
          handleCardClick={handleCardClick}
          cards={cards}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
        /> */}
        <Footer />

        <EditProfilePopup onClose={closeAllPopups} onSubmit={editProfile} isOpened={isEditProfilePopupOpen} />

        <EditAvatarPopup onClose={closeAllPopups} onSubmit={changeAvatar} isOpened={isEditAvatarPopupOpen} />

        <AddPlacePopup onClose={closeAllPopups} onSubmit={addPlace} isOpened={isAddPlacePopupOpenm} />

        <PopupWithForm buttonText={"ДА"} name="delete" onClose={closeAllPopups} />

        <ImagePopup onClose={closeAllPopups} selectedCard={selectedCard} />
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
