function ImagePopup(props) {
  return (
    <>
      <div className="popup popup_type_image">
        <figure className="popup__figure-container">
          <img src={props} alt="#" className="popup__image" />
          <figcaption className="popup__image-caption">{props}</figcaption>
          <button type="button" aria-label="Закрыть" className="popup__close-btn"></button>
        </figure>
      </div>
    </>
  );

}

export default ImagePopup