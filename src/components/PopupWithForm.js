

function PopupWithForm(){
  return(
    <>
      <div class="popup popup_type_add">
    <div class="popup__container">
      <form id="add-form" name="cardForm" class="popup__form" novalidate>
        <h2 class="popup__name">Новое место</h2>
            <input id="place-name" name="name" type="text" class="popup__input" placeholder="Название" minlength="2" maxlength="30" required />
            <span class="popup__input-error place-name-error"></span>
            <input id="url" name="link" type="url" class="popup__input" placeholder="Ссылка на картинку" required />
            <span class="popup__input-error url-error"></span>
        <button id="add-form-submit" type="submit" class="popup__submit-btn ">Создать</button>
      </form>
      <button type="button" aria-label="Закрыть" class="popup__close-btn"></button>
    </div>
  </div>
    </>
  )

}