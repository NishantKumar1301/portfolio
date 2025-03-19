/* eslint-disable jsx-a11y/anchor-is-valid */
import './portfolio.css'
import BhaiyaPhoto from '../../assests/bhaiyaphoto.png'
import TourPhoto from '../../assests/tourphoto.png'
import OnlineShop from '../../assests/onlinephoto.png'
import Game from '../../assests/gamephot.png'
import Blog from '../../assests/blogphoto.png'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={TourPhoto} alt="Tourist" />
          </div>
          <h3>Search Tourist Places</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/NishantKumar1301/froentend_Tourist"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://youtu.be/A4diNLtWK20"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={OnlineShop} alt="OnlineShop" />
          </div>
          <h3>Online Shop</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/NishantKumar1301/online-shop"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://youtu.be/LsyhC3oOgRY"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={BhaiyaPhoto} alt="bhaiya" />
          </div>
          <h3>After Motor</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/NishantKumar1301/After_Motor_Frontend"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://youtu.be/x4BElf1lsWg"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Game} alt="OnlineShop" />
          </div>
          <h3>Online Game</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/NishantKumar1301/first-project"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://youtu.be/7MGCH_SAeh8"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Blog} alt="OnlineShop" />
          </div>
          <h3>Daily Blogs</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/NishantKumar1301/blog"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://youtu.be/5jJhnHOGB2o"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
export default Portfolio