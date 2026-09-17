import {
  BOOKING_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  MAPS_URL,
} from '../config'
import { useLanguage } from '../i18n'
import { useReveal } from '../useReveal'
import './Contact.css'

// `day` pekar på en nyckel i translations[språk].contact.days.
const HOURS = [
  { day: 'mon', time: '09:00–17:00' },
  { day: 'tue', time: '09:00–17:00' },
  { day: 'wed', time: '09:00–17:00' },
  { day: 'thu', time: '09:00–17:00' },
  { day: 'fri', time: '09:00–17:00' },
  { day: 'sat', time: '09:00–15:00' },
  { day: 'sun', closed: true },
]

function Contact() {
  const { t } = useLanguage()
  const [revealRef, revealClass] = useReveal('contact')

  return (
    <section className={revealClass} id="kontakt" ref={revealRef}>
      <div className="contact__inner">
        <header className="contact__header">
          <p className="contact__eyebrow">{t.contact.eyebrow}</p>
          <h2 className="contact__title">{t.contact.title}</h2>
        </header>

        <div className="contact__grid">
          <div className="contact__panel">
            <h3 className="contact__label">{t.contact.addressLabel}</h3>
            {/* Företagsnamn och gatuadress är desamma på båda språken. */}
            <address className="contact__address">
              Pincher&rsquo;s Barbershop &amp; Ladies Corner
              <br />
              Andra Långgatan 8
              <br />
              413 03 Göteborg
            </address>

            <h3 className="contact__label">{t.contact.phoneLabel}</h3>
            <p>
              <a className="contact__phone" href="tel:+46739992348">
                073-999 23 48
              </a>
            </p>

            <h3 className="contact__label">{t.contact.emailLabel}</h3>
            <p>
              <a className="contact__email" href="mailto:pinchers1@hotmail.com">
                pinchers1@hotmail.com
              </a>
            </p>

            <div className="contact__actions">
              <a
                className="btn"
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.common.booking}
              </a>
              <a
                className="btn btn--ghost"
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contact.directions}
              </a>
            </div>
          </div>

          <div className="contact__panel">
            <h3 className="contact__label">{t.contact.hoursLabel}</h3>
            <dl className="hours">
              {HOURS.map(({ day, time, closed }) => (
                <div className="hours__row" key={day}>
                  <dt className="hours__day">{t.contact.days[day]}</dt>
                  <dd
                    className={
                      closed ? 'hours__time hours__time--closed' : 'hours__time'
                    }
                  >
                    {closed ? t.contact.closed : time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="contact__social">
          <h3 className="contact__label">{t.contact.followLabel}</h3>
          <ul className="social">
            <li>
              <a
                className="social__item"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
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
              </a>
            </li>
            <li>
              <a
                className="social__item"
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
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
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
