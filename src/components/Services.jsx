import { BOOKING_URL } from '../config'
import { useLanguage } from '../i18n'
import './Services.css'

function Services() {
  const { t } = useLanguage()

  return (
    <section className="services" id="tjanster">
      <div className="services__inner">
        <header className="services__header">
          <p className="services__eyebrow">{t.services.eyebrow}</p>
          <h2 className="services__title">{t.services.title}</h2>
        </header>

        <ul className="services__grid">
          {t.services.items.map((service, index) => (
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
            {t.common.booking}
          </a>
          <p className="services__note">{t.services.note}</p>
        </div>
      </div>
    </section>
  )
}

export default Services
