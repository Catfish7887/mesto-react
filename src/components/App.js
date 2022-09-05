// import logo from './logo.svg';

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  return (
   <>
    <Header />
    <Main />
    <Footer />

    <div className="popup popup_type_edit">
    <div className="popup__container">
      <form id="edit-form" name="editForm" className="popup__form" noValidate>
        <h2 className="popup__name">Редактировать профиль</h2>
            <input id="name" name="name" minLength="2" maxLength="40" type="text" placeholder="Имя" className="popup__input" required />
            <span className="popup__input-error name-error"></span>
            <input id="about" name="about" type="text" placeholder="Обо мне" minLength="2" maxLength="200" className="popup__input" required />
            <span className="popup__input-error about-error"></span>
        <button id="edit-form-submit" type="submit" className="popup__submit-btn">Сохранить</button>
      </form>
      <button type="button" aria-label="Закрыть" className="popup__close-btn"></button>
    </div>
  </div>

  <div className="popup popup_type_add">
    <div className="popup__container">
      <form id="add-form" name="cardForm" className="popup__form" noValidate>
        <h2 className="popup__name">Новое место</h2>
            <input id="place-name" name="name" type="text" className="popup__input" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__input-error place-name-error"></span>
            <input id="url" name="link" type="url" className="popup__input" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error url-error"></span>
        <button id="add-form-submit" type="submit" className="popup__submit-btn ">Создать</button>
      </form>
      <button type="button" aria-label="Закрыть" className="popup__close-btn"></button>
    </div>
  </div>

  <div className="popup popup_type_image">
    <figure className="popup__figure-container">
      <img src="#" alt="#" className="popup__image" />
      <figcaption className="popup__image-caption"></figcaption>
      <button type="button" aria-label="Закрыть" className="popup__close-btn"></button>
    </figure>
  </div>



  <div className="popup popup_type_button">
    <div className="popup__container">
      <h2 className="popup__name">Вы уверены?</h2>
      <form id="delete-form" name="deleteForm" className="popup__form" noValidate>
        <button id="add-form-submit" type="submit" className="popup__submit-btn ">ДА</button>
      </form>
      <button type="button" aria-label="Закрыть" className="popup__close-btn"></button>
    </div>
  </div>

  <div className="popup popup_type_avatar">
    <div className="popup__container">
      <form id="avatar-form" name="avatarForm" className="popup__form" noValidate>
        <h2 className="popup__name popup__name_avatar">Обновить аватар</h2>
            <input id="avatar" name="avatar" type="url" className="popup__input" placeholder="Ссылка на картинку" required /> 
            <span className="popup__input-error avatar-error"></span>
        <button id="avatar-form-submit" type="submit" className="popup__submit-btn ">Сохранить</button>
      </form>
      <button type="button" aria-label="Закрыть" className="popup__close-btn"></button>
    </div>
  </div>

   </>
  );
}

export default App;
