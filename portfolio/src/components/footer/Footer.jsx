/* eslint-disable jsx-a11y/anchor-is-valid */
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { BsTwitterX } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Nishant Kumar
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testinomials">Testinomial</a>
        </li>
        <li>
          <a href="#contacts">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://twitter.com"><BsTwitterX /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nishant Kumar. All rights reserved.</small>
      </div>
    </footer>
  )
}
export default Footer