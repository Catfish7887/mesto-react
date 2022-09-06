

function PopupWithForm(props) {
  return (
    <>
      <div className={`popup popup_type_${props.name} ${props.isOpened ? "popup_opened" : 'popup_closed'}`}
        onMouseDown={(e) => { e.target.classList.contains('popup_opened') && props.onClose() }}
      >
        <div className="popup__container">
          <form id="add-form" name={`${props.name}`} className="popup__form" noValidate>
            <>{props.children}</>
          </form>
          <button type="button" aria-label="Закрыть" onClick={props.onClose} className="popup__close-btn"></button>
        </div>
      </div>
    </>
  )

}

export default PopupWithForm