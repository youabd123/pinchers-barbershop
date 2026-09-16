import { BOOKING_URL } from '../config'
import './Services.css'

const SERVICES = [
  {
    title: 'Klippning',
    text: 'Klassiska klippningar, skarpa fades och moderna frisyrer. Vi formar snittet efter din hårtyp, din ansiktsform och din stil.',
  },
  {
    title: 'Skägg',
    text: 'Trimning, formning och styling av skägget. Rena konturer och en välvårdad finish som håller sig långt efter besöket.',
  },
  {
    title: 'Klipp & Skägg',
    text: 'En komplett behandling där hår och skägg formas tillsammans — för ett helhetsintryck som verkligen sitter.',
  },
  {
    title: 'Färg & Ladies Corner',
    text: 'Färgning, klippning och utvalda behandlingar. I vår Ladies Corner tar vi hand om dig som vill ha det lilla extra.',
  },
]

function Services() {
  return (
    <section className="services" id="tjanster">
      <div className="services__inner">
        <header className="services__header">
          <p className="services__eyebrow">Vad vi gör</p>
          <h2 className="services__title">Tjänster</h2>
        </header>

        <ul className="services__grid">
          {SERVICES.map((service, index) => (
            <li className="service" key={service.title}>
              <span className="service__number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__text">{service.text}</p>
            </li>
          ))}
        </ul>

        <div className="services__booking">
          <a
            className="btn"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Boka tid
          </a>
          <p className="services__note">
            Alla behandlingar, aktuella priser och lediga tider hittar du på
            Bokadirekt.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
