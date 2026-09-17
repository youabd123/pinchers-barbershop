import { useEffect, useRef } from 'react'
import { asset } from '../config'
import { useLanguage } from '../i18n'
import { useReveal } from '../useReveal'
import './Gallery.css'

const IMAGES = [
  '/images/gallery/inspo.1.webp',
  '/images/gallery/inspo.2.webp',
  '/images/gallery/inspo.3.jpg',
  '/images/gallery/inspo.4.webp',
]

const SPEED = 26 // pixlar per sekund

function Gallery() {
  const { t } = useLanguage()
  const [revealRef, revealClass] = useReveal('gallery')
  const trackRef = useRef(null)
  const pausedRef = useRef(false)
  const timerRef = useRef(0)

  // Pausa autoscroll medan besökaren håller på, och återuppta strax efter.
  const pause = () => {
    window.clearTimeout(timerRef.current)
    pausedRef.current = true
  }

  const resumeSoon = (delay = 2500) => {
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      pausedRef.current = false
    }, delay)
  }

  useEffect(() => {
    const track = trackRef.current
    const timer = timerRef
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame
    let last = performance.now()
    let offset = 0

    const step = (now) => {
      const delta = Math.min((now - last) / 1000, 0.1)
      last = now

      // Listan renderas två gånger — vid halva bredden är vi tillbaka
      // på samma bild igen, så hoppet syns inte.
      const half = track.scrollWidth / 2

      if (pausedRef.current) {
        offset = track.scrollLeft
      } else if (half > 0) {
        offset += SPEED * delta
        if (offset >= half) offset -= half
        track.scrollLeft = offset
      }

      frame = window.requestAnimationFrame(step)
    }

    frame = window.requestAnimationFrame(step)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timer.current)
    }
  }, [])

  const scrollStep = (direction) => {
    const track = trackRef.current
    const amount = track.clientWidth * 0.5
    const half = track.scrollWidth / 2

    pause()
    // Hoppa till den andra kopian så att "föregående" fungerar vid början.
    if (direction < 0 && track.scrollLeft < amount) {
      track.scrollLeft += half
    }
    track.scrollBy({ left: amount * direction, behavior: 'smooth' })
    resumeSoon()
  }

  return (
    <section className={revealClass} id="galleri" ref={revealRef}>
      <div className="gallery__inner">
        <header className="gallery__header">
          <p className="gallery__eyebrow">{t.gallery.eyebrow}</p>
          <h2 className="gallery__title">{t.gallery.title}</h2>
        </header>

        <div
          className="gallery__viewport"
          onPointerEnter={pause}
          onPointerLeave={() => resumeSoon(600)}
          onPointerDown={pause}
          onPointerUp={() => resumeSoon()}
          onTouchStart={pause}
          onTouchEnd={() => resumeSoon()}
          onWheel={() => {
            pause()
            resumeSoon()
          }}
          onFocusCapture={pause}
          onBlurCapture={() => resumeSoon(600)}
        >
          <button
            type="button"
            className="gallery__arrow gallery__arrow--prev"
            onClick={() => scrollStep(-1)}
            aria-label={t.gallery.previous}
          >
            <span aria-hidden="true">&#8249;</span>
          </button>

          <ul className="gallery__track" ref={trackRef}>
            {[...IMAGES, ...IMAGES].map((src, index) => (
              <li
                className="gallery__item"
                key={index}
                aria-hidden={index >= IMAGES.length ? 'true' : undefined}
              >
                <img
                  className="gallery__image"
                  src={asset(src)}
                  alt={index >= IMAGES.length ? '' : t.gallery.imageAlt}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="gallery__arrow gallery__arrow--next"
            onClick={() => scrollStep(1)}
            aria-label={t.gallery.next}
          >
            <span aria-hidden="true">&#8250;</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery
