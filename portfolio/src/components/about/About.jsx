import My from '../../assests/nk.jpg'
import { FaAward } from 'react-icons/fa6'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import './about.css'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me" style={{ width: "100%", height: "100%" }}>
    <div className="about__me-image" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <img
        src={My}
        alt="Nishant Kumar"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6 months +</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>1</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            I am Nishant kumar . Currently i am persuring Btech from National
            Institute Of Technology , Patna . I am a fullstack developer !!.
          </p>

          <a href="#contacts" className='btn btn__primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
export default About
