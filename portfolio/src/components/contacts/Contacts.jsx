import './contact.css'
import { MdEmail } from 'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'

import  { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contacts = () => {
    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault()

      emailjs
        .sendForm(
          'service_q63fuqs',
          'template_w1mhg8b',
          form.current,
          'WGKO0EpqQ9nDAdCm7'
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
        e.target.reset();
    }
  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="conatct__option-icon" />
            <h4>Email</h4>
            <h5>nishantkumarfps@gmail.com</h5>
            <a
              href="mailto:nishantkumarfps@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className="conatct__option-icon" />
            <h4>Messenger</h4>
            <h5>Nishant Kumar</h5>
            <a
              href="https://m.me/nishantkumar.nishant.12764"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="conatct__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91-9122992931</h5>
            <a
              href="https://api.whatsapp.com/send?phone=9122992931"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
export default Contacts