import { FaLinkedin } from 'react-icons/fa'
import { FaSquareGithub } from 'react-icons/fa6'
import { FiDribbble } from 'react-icons/fi'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/nishant-kumar-4a2293257/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaSquareGithub />
      </a>

      <a
        href="https://dribbble.com"
        target="_blank"
        rel="noreferrer"
      >
        <FiDribbble />
      </a>

    </div>
  )
}
export default HeaderSocials
