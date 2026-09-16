import Services from './components/Services'
import About from './components/About'
import Staff from './components/Staff'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BOOKING_URL } from './config'
import './App.css'

function App() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero__glow" aria-hidden="true" />

          <div className="hero__content">
            <p className="hero__eyebrow">Est. Jamaica &middot; Sverige</p>

            <h1 className="hero__title">
              Pincher&rsquo;s
              <span className="hero__title-line">Barbershop</span>
            </h1>

            <div className="hero__rule" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <p className="hero__city">Göteborg</p>

            <p className="hero__tagline">
              Skarpa fades, rena linjer och karibisk själ &mdash; mitt i stan.
            </p>

            <a
              className="btn hero__cta"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Boka tid
            </a>
          </div>
        </section>

        <Services />
        <About />
        <Staff />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
