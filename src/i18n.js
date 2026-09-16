import { createContext, useContext } from 'react'

export const DEFAULT_LANGUAGE = 'sv'

// All text på sajten samlas här. Varumärkesnamn (Pincher's Barbershop,
// Ladies Corner, Bokadirekt), gatuadressen, personalens namn och
// "Est. 2001 / Jamaica → Göteborg" står kvar i komponenterna eftersom de
// är desamma på båda språken.
export const translations = {
  sv: {
    common: {
      booking: 'Boka tid',
      navLabel: 'Huvudmeny',
      languageLabel: 'Språk',
      openMenu: 'Öppna meny',
      closeMenu: 'Stäng meny',
      toTop: 'Till toppen',
    },
    nav: {
      services: 'Tjänster',
      about: 'Om oss',
      team: 'Personal',
      gallery: 'Galleri',
      contact: 'Kontakt',
    },
    hero: {
      eyebrow: 'Est. Jamaica · Sverige',
      city: 'Göteborg',
      tagline: 'Skarpa fades, rena linjer och karibisk själ — mitt i stan.',
    },
    services: {
      eyebrow: 'Vad vi gör',
      title: 'Tjänster',
      note: 'Alla behandlingar, aktuella priser och lediga tider hittar du på Bokadirekt.',
      items: [
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
      ],
    },
    about: {
      eyebrow: 'Vilka vi är',
      title: 'Om oss',
      paragraphs: [
        'Pincher’s historia började på en strand på Jamaica, där Pinchers redan som tonåring upptäckte sin talang och känsla för hår. I början av 90-talet tog han sig till Göteborg och fortsatte utveckla sitt hantverk.',
        'År 2001 grundade han Pincher’s Barbershop. Med sina jamaicanska rötter, sin erfarenhet och sin känsla för stil har han byggt upp ett starkt namn i staden.',
        'Idag är Pinchers en av Göteborgs mest omtalade frisörer inom sin genre – med över två decennier bakom Pincher’s Barbershop.',
      ],
    },
    staff: {
      eyebrow: 'Personal',
      title: 'Möt teamet',
      roles: {
        master: 'Master Barber / Designer & Director / Personal Trainer',
        hairdresser: 'Frisör',
        trainee: 'Elev',
      },
    },
    gallery: {
      eyebrow: 'Vårt arbete',
      title: 'Galleri',
      previous: 'Föregående bilder',
      next: 'Nästa bilder',
      placeholderAlt: 'Platshållarbild',
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Hitta oss',
      addressLabel: 'Adress',
      phoneLabel: 'Telefon',
      hoursLabel: 'Öppettider',
      followLabel: 'Följ oss',
      directions: 'Hitta hit',
      closed: 'Stängt',
      days: {
        mon: 'Måndag',
        tue: 'Tisdag',
        wed: 'Onsdag',
        thu: 'Torsdag',
        fri: 'Fredag',
        sat: 'Lördag',
        sun: 'Söndag',
      },
    },
  },

  en: {
    common: {
      booking: 'Book now',
      navLabel: 'Main menu',
      languageLabel: 'Language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      toTop: 'Back to top',
    },
    nav: {
      services: 'Services',
      about: 'About',
      team: 'Team',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Est. Jamaica · Sweden',
      city: 'Göteborg',
      tagline: 'Sharp fades, clean lines and Caribbean soul — right in the city.',
    },
    services: {
      eyebrow: 'What we do',
      title: 'Services',
      note: 'You will find every treatment, current prices and available times on Bokadirekt.',
      items: [
        {
          title: 'Haircuts',
          text: 'Classic cuts, sharp fades and modern styles. We shape the cut around your hair type, your face and your look.',
        },
        {
          title: 'Beards',
          text: 'Beard trimming, shaping and styling. Clean lines and a well-groomed finish that lasts long after your visit.',
        },
        {
          title: 'Hair & Beard',
          text: 'A complete treatment where hair and beard are shaped together — for a look that truly comes together.',
        },
        {
          title: 'Colour & Ladies Corner',
          text: 'Colouring, cuts and selected treatments. In our Ladies Corner we look after you when you want something extra.',
        },
      ],
    },
    about: {
      eyebrow: 'Who we are',
      title: 'About us',
      paragraphs: [
        'The Pincher’s story began on a beach in Jamaica, where Pinchers discovered his talent and his feel for hair as a teenager. In the early nineties he made his way to Gothenburg and kept sharpening his craft.',
        'In 2001 he founded Pincher’s Barbershop. With his Jamaican roots, his experience and his eye for style, he has built a strong name in the city.',
        'Today Pinchers is one of Gothenburg’s most talked-about hairdressers in his field – with more than two decades behind Pincher’s Barbershop.',
      ],
    },
    staff: {
      eyebrow: 'Our people',
      title: 'Meet the team',
      roles: {
        master: 'Master Barber / Designer & Director / Personal Trainer',
        hairdresser: 'Hairdresser',
        trainee: 'Trainee',
      },
    },
    gallery: {
      eyebrow: 'Our work',
      title: 'Gallery',
      previous: 'Previous images',
      next: 'Next images',
      placeholderAlt: 'Placeholder image',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Find us',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      hoursLabel: 'Opening hours',
      followLabel: 'Follow us',
      directions: 'Get directions',
      closed: 'Closed',
      days: {
        mon: 'Monday',
        tue: 'Tuesday',
        wed: 'Wednesday',
        thu: 'Thursday',
        fri: 'Friday',
        sat: 'Saturday',
        sun: 'Sunday',
      },
    },
  },
}

export const LanguageContext = createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  t: translations[DEFAULT_LANGUAGE],
})

export function useLanguage() {
  return useContext(LanguageContext)
}
