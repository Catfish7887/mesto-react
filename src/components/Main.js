import { useEffect, useState, useContext } from 'react';
import Avatar from '../images/Avatar.png'
import api from "../utils/Api.js";
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {

  const [cards, setCards] = useState([])

  const userContext = useContext(CurrentUserContext)

  const getCards = api.getInitialCards()


  function handleCardLike(card) {
   
    const isLiked = card.likes.some(i => i._id === userContext._id);
    // debugger
    
    api.changeCardLikeStatus(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  
    });
} 

  useEffect(()=>{
    api.getInitialCards()
    .then(res=>setCards(res))
    .catch(err=>console.log(err))
  }, [])

  // useEffect(() => {
  //   Promise.all([getProfileInfo, getCards])
  //     .then(([profileData, cards]) => {

  //       setUserAvatar(profileData.avatar)
  //       setUserDescription(profileData.about)
  //       setUserName(profileData.name)

  //       setCards(cards)
  //     }).catch(err => console.log(err))

  // }, [])

  return (
    <main className="main">
      <section className="profile">

        <button type="button" aria-label="Изменить аватар" onClick={props.handleEditAvatarClick} className="profile__avatar-btn">
          <img src={userContext.avatar} alt="Аватар пользователя" className="profile__avatar" />
        </button>
        <div className="profile__name-container">
          <div className="profile__flex-container">
            <h1 className="profile__name">{userContext.name}</h1>
            <button type="button" aria-label="Редактировать" onClick={props.handleEditProfileClick} className="profile__edit-btn"></button>
          </div>
          <p className="profile__about">{userContext.about}</p>
        </div>
        <button aria-label="Добавить" type="button" onClick={props.handleAddPlaceClick} className="profile__add-btn"></button>

      </section>
      <section className="places">

        <ul className="places__list">
          {cards.map(card => <Card key={card._id} {...card} handleLike={handleCardLike} handleCardClick={props.handleCardClick} />)}
        </ul>

      </section>
    </main>

  );

};
export default Main