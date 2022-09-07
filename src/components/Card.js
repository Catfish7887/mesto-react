function Card(props) {

  function handleCardClick() {
    props.handleCardClick(props);
    console.log(props)
  }

  return (
    <>
      <li className="place">
        <img src={props.link} alt={props.name} onClick={handleCardClick} className="place__image" />
        <div className="place__container">
          <h2 className="place__name">{props.name}</h2>
          <div className="place__like-container">
            <button type="button" aria-label="Лайк" className="place__like-btn"></button>
            <p className="place__like-count">{props.likes.length}</p>
          </div>
        </div>
        <button type="button" aria-label="Удалить" className="place__delete-btn"></button>
      </li>
    </>
  )

}

export default Card