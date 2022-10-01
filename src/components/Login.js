
function Login(){
  return(
    <section className="authorization">
      <h2 className="authorization__header">Вход</h2>
      <form className="popup__form" name="login">
        <input className="popup__input popup__input_white" placeholder="Email" type="email"></input>
        <input className="popup__input popup__input_white" placeholder="Пароль" type="password"></input>
        <button type="submit" className="popup__submit-btn popup__submit-btn_white">Войти</button>
      </form>

    </section>
  )
}

export default Login