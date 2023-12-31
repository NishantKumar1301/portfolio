import './header.css'
import CTA from './CTA'
import My from '../../assests/mummy.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nishant Kumar</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={My} alt="nishant" />
        </div>

        <a href="#contacts"className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}
export default Header