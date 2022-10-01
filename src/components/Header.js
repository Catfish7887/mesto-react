import headerLogo from '../images/logo.svg'

function Header(props){
  return(
    <header className="header">
      <img src={headerLogo} alt="Лого" className="header__logo" />
      <div className='header__container'>
        <span className='header__login-span'>login@example.com</span>
        <button className='header__button' type='button'>Выйти</button>
      </div>
      
    </header>
  );
}

export default Header
