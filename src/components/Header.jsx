import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n'
import { BOOKING_URL } from '../config'
import './Header.css'

// id:n motsvarar sektionernas befintliga id:n i respektive komponent.
const LINKS = [
  { id: 'tjanster', key: 'services' },
  { id: 'om-oss', key: 'about' },
  { id: 'personal', key: 'team' },
  { id: 'galleri', key: 'gallery' },
  { id: 'kontakt', key: 'contact' },
]

function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Markerar den sektion som just nu passerar mitten av vyn.
  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(
      Boolean,
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries.find((entry) => entry.isIntersecting)
        if (inView) setActive(inView.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Stäng mobilmenyn med Escape.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className={scrolled ? 'header header--scrolled' : 'header'}>
      <div className="header__inner">
        <a
          className="header__brand"
          href="#hem"
          onClick={() => setOpen(false)}
          aria-label={t.common.toTop}
        >
          Pincher&rsquo;s
        </a>

        <nav className="header__nav" aria-label={t.common.navLabel}>
          <ul className="header__links">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  className={
                    active === link.id
                      ? 'header__link header__link--active'
                      : 'header__link'
                  }
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <div className="lang" role="group" aria-label={t.common.languageLabel}>
            <button
              type="button"
              className={
                language === 'sv' ? 'lang__btn lang__btn--active' : 'lang__btn'
              }
              onClick={() => setLanguage('sv')}
              aria-pressed={language === 'sv'}
              lang="sv"
            >
              SE
            </button>
            <span className="lang__divider" aria-hidden="true">
              |
            </span>
            <button
              type="button"
              className={
                language === 'en' ? 'lang__btn lang__btn--active' : 'lang__btn'
              }
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              lang="en"
            >
              EN
            </button>
          </div>

          <a
            className="btn btn--sm header__cta"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.common.booking}
          </a>

          <button
            type="button"
            className="header__burger"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobilmeny"
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="header__mobile" id="mobilmeny" aria-label={t.common.navLabel}>
          <ul className="header__mobile-links">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  className={
                    active === link.id
                      ? 'header__mobile-link header__mobile-link--active'
                      : 'header__mobile-link'
                  }
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="btn"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            {t.common.booking}
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header
