export const BOOKING_URL =
  'https://www.bokadirekt.se/places/pinchers-barbershop-ladies-corner-29521'

export const ADDRESS = 'Andra Långgatan 8, 413 03 Göteborg'

export const INSTAGRAM_URL = 'https://www.instagram.com/pinchersbarbershop/'

export const FACEBOOK_URL = 'https://www.facebook.com/pinchers/'

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(`Pincher's Barbershop, ${ADDRESS}`)

// Bilder i public/ måste prefixas med Vites base-sökväg, annars pekar de fel
// när sajten ligger i en underkatalog på GitHub Pages.
// Dev: /images/... — Bygge: /pinchers-barbershop/images/...
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
