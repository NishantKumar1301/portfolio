import React from "react"
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testinomials from './components/testinomials/Testinomials'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testinomials />
      <Contacts />
      <Footer />
    </>
  )
}
export default App