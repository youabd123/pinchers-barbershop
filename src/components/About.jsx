import { useLanguage } from '../i18n'
import './About.css'

function About() {
  const { t } = useLanguage()

  return (
    <section className="about" id="om-oss">
      <div className="about__inner">
        <header className="about__header">
          <p className="about__eyebrow">{t.about.eyebrow}</p>
          <h2 className="about__title">{t.about.title}</h2>
        </header>

        <div className="about__text">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        {/* Varumärkesdetalj — samma på båda språken. */}
        <div className="about__est">
          <span className="about__est-year">Est. 2001</span>
          <span className="about__est-route">
            Jamaica <span aria-hidden="true">&rarr;</span> Göteborg
          </span>
        </div>
      </div>
    </section>
  )
}

export default About
