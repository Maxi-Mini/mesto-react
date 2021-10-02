import header_logo from '../images/header_logo.svg'
function Header(){
    return(
        <header className="header">
        <img className="header__logo" src={header_logo} alt="логотип место"/>
        </header>
    )
}

export default Header