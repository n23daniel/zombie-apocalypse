import LogoImg from '../assets/logo.svg'

export default function Header() {
  return (
    <header id="header">
      <img className="header-logo" src={LogoImg} alt="Logo"/>
    </header>
  )
}
