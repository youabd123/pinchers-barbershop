import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Ger en sektion klassen .reveal + .is-visible när den scrollas in i vyn.
// Returnerar [ref, className] så komponenten bara behöver sätta två attribut.
export function useReveal(baseClassName) {
  const ref = useRef(null)
  // Den som valt reducerad rörelse ser sektionen direkt, utan animation.
  const [visible, setVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (prefersReducedMotion()) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return [ref, `${baseClassName} reveal${visible ? ' is-visible' : ''}`]
}
