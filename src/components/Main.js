import { useEffect, useState } from 'react';
import Avatar from '../images/Avatar.png'
import api from "../utils/Api.js";
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  const getProfileInfo = api.getProfile()
  const getCards = api.getInitialCards()

  useEffect(() => {
    Promise.all([getProfileInfo, getCards])
      .then(([profileData, cards]) => {

        setUserAvatar(profileData.avatar)
        setUserDescription(profileData.about)
        setUserName(profileData.name)

        setCards(cards)
      }).catch(err => console.log(err))

  }, [])

  return (
    <main className="main">
      <section className="profile">

        <button type="button" aria-label="Изменить аватар" onClick={props.handleEditAvatarClick} className="profile__avatar-btn">
          <img src={userAvatar === '' ? Avatar : userAvatar} alt="Аватар пользователя" className="profile__avatar" />
        </button>
        <div className="profile__name-container">
          <div className="profile__flex-container">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" aria-label="Редактировать" onClick={props.handleEditProfileClick} className="profile__edit-btn"></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button aria-label="Добавить" type="button" onClick={props.handleAddPlaceClick} className="profile__add-btn"></button>

      </section>
      <section className="places">

        <ul className="places__list">
        {cards.map(card => <Card key={card._id} {...card} />)}
        </ul>

      </section>
    </main>

  );

};
export default Main