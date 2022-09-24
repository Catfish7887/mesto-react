import { useEffect, useState, useContext } from "react";
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

  }

  function handleCardLike(card) {

    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeCardLikeStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));

    });
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
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          handleAddPlaceClick={handleAddPlaceClick}
          handleEditAvatarClick={handleEditAvatarClick}
          handleEditProfileClick={handleEditProfileClick}
          handleCardClick={handleCardClick}
          cards={cards}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
        />
        <Footer />

        <EditProfilePopup onClose={closeAllPopups} onSubmit={editProfile} isOpened={isEditProfilePopupOpen} />

        <EditAvatarPopup onClose={closeAllPopups} onSubmit={changeAvatar} isOpened={isEditAvatarPopupOpen} />

        <AddPlacePopup onClose={closeAllPopups} onSubmit={addPlace} isOpened={isAddPlacePopupOpenm} />

        <PopupWithForm buttonText={"ДА"} name="delete" onClose={closeAllPopups} />

        <ImagePopup onClose={closeAllPopups} selectedCard={selectedCard} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
