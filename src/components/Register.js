function Register(){
  return(
    <section className="authorization">
      <h2 className="authorization__header">Регистрация</h2>
      <form className="popup__form" name="register">
        <input className="popup__input popup__input_white" placeholder="Email" type="email"></input>
        <input className="popup__input popup__input_white" placeholder="Пароль" type="password"></input>
        <button type="submit" className="popup__submit-btn popup__submit-btn_white">Зарегистрироваться</button>
      </form>
      <div className="authorization__span-container">
        <span className="authorization__span">Уже зарегистрированы?</span>
        <button className="authorization__button">Войти</button>
      </div>
    </section>
  )
}

export default Register