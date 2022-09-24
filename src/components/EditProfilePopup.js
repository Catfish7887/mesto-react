import { useState, useContext, useEffect } from "react"
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const [name, setName] = useState({ name: '' });
  const [about, setAbout] = useState({ about: '' });

  const userContext = useContext(CurrentUserContext)

  useEffect(() => {
    setName(userContext.name)
    setAbout(userContext.about)
  }, [userContext])

  function handleChange(e) {
    e.target.name === 'name' ? setName(e.target.value) : setAbout(e.target.value)

  }

  function handleSubmit(e) {

    e.preventDefault();

    props.onSubmit({
      name: name,
      about: about,
    });
    
  }

  return (
    <>
      <PopupWithForm name={'editProfile'} isOpened={props.isOpened} onClose={props.onClose} buttonText={'Сохранить'} onSubmit={handleSubmit} children={
        <>
          <h2 className="popup__name">Редактировать профиль</h2>
          <input id="name" onChange={handleChange} value={name || ''} name="name" minLength="2" maxLength="40" type="text" placeholder="Имя" className="popup__input" required />
          <span className="popup__input-error name-error"></span>
          <input id="about" onChange={handleChange} value={about || ''} name="about" type="text" placeholder="Обо мне" minLength="2" maxLength="200" className="popup__input" required />
          <span className="popup__input-error about-error"></span>
        </>
      } />
    </>
  )

}

export default EditProfilePopup