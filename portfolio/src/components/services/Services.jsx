import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Development is Universal</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Development is Business Catalyst</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Development is User Experience Enhancement</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Development is Technological Innovation Driver</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Development is Seamless Data Exchange Enabler</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI/UX Design is Visual Harmony Creator</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>UI/UX Design is User-Centric Navigator</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>UI/UX Design is Emotional Connection Forger</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>UI/UX Design is Accessibility Champion</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>UI/UX Design is Iterative Refinement Sculptor</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Creation is Information Alchemist</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Creation is Brand Storyteller</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Creation is Visual Communicator</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Creation is SEO Strategist</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Creation is Audience Connection Builder</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
export default Services