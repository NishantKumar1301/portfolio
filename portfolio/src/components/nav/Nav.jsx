/* eslint-disable jsx-a11y/anchor-is-valid */
import './nav.css'
import { IoHome } from 'react-icons/io5'
import { FaHospitalUser } from 'react-icons/fa'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { IoMdContact } from 'react-icons/io'
import { useState } from 'react'

const Nav = () => {
  const [ activeNav, setActiveNav ] = useState('#')

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <IoHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FaHospitalUser />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>

      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>

      <a
        href="#contacts"
        onClick={() => setActiveNav('#contacts')}
        className={activeNav === '#contacts' ? 'active' : ''}
      >
        <IoMdContact />
      </a>
    </nav>
  )
}
export default Nav
