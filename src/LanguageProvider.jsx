import { useEffect, useMemo, useState } from 'react'
import { DEFAULT_LANGUAGE, LanguageContext, translations } from './i18n'

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE)

  // Håller <html lang="..."> i takt med valt språk.
  useEffect(() => {
    document.documentElement.lang = language === 'sv' ? 'sv' : 'en'
  }, [language])

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
