import { BOOKING_URL, MAPS_URL } from '../config'
import './Contact.css'

const HOURS = [
  { day: 'Måndag', time: '09:00–17:00' },
  { day: 'Tisdag', time: '09:00–17:00' },
  { day: 'Onsdag', time: '09:00–17:00' },
  { day: 'Torsdag', time: '09:00–17:00' },
  { day: 'Fredag', time: '09:00–17:00' },
  { day: 'Lördag', time: '09:00–15:00' },
  { day: 'Söndag', time: 'Stängt', closed: true },
]

function Contact() {
  return (
    <section className="contact" id="kontakt">
      <div className="contact__inner">
        <header className="contact__header">
          <p className="contact__eyebrow">Kontakt</p>
          <h2 className="contact__title">Hitta oss</h2>
        </header>

        <div className="contact__grid">
          <div className="contact__panel">
            <h3 className="contact__label">Adress</h3>
            <address className="contact__address">
              Pincher&rsquo;s Barbershop &amp; Ladies Corner
              <br />
              Andra Långgatan 8
              <br />
              413 03 Göteborg
            </address>

            <h3 className="contact__label">Telefon</h3>
            <p>
              <a className="contact__phone" href="tel:+46739992348">
                073-999 23 48
              </a>
            </p>

            <div className="contact__actions">
              <a
                className="btn"
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Boka tid
              </a>
              <a
                className="btn btn--ghost"
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hitta hit
              </a>
            </div>
          </div>

          <div className="contact__panel">
            <h3 className="contact__label">Öppettider</h3>
            <dl className="hours">
              {HOURS.map(({ day, time, closed }) => (
                <div className="hours__row" key={day}>
                  <dt className="hours__day">{day}</dt>
                  <dd
                    className={closed ? 'hours__time hours__time--closed' : 'hours__time'}
                  >
                    {time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Byt ut <span> mot <a href="..." target="_blank" rel="noopener noreferrer">
            när kontona är bekräftade. */}
        <div className="contact__social">
          <h3 className="contact__label">Följ oss</h3>
          <ul className="social">
            <li className="social__item">
              <span className="social__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </span>
              Instagram
            </li>
            <li className="social__item">
              <span className="social__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M14.8 8.2h-1.3c-.6 0-.9.3-.9.9v1.4h2.1l-.3 2.1h-1.8V19h-2.2v-6.4H8.6v-2.1h1.8V8.9c0-1.8 1-2.8 2.7-2.8h1.7v2.1z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Facebook
            </li>
          </ul>
          <p className="contact__social-note">
            Länkar till våra konton läggs till inom kort.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
