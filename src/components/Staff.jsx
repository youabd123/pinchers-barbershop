import { useLanguage } from '../i18n'
import './Staff.css'

// Namnen är desamma på båda språken. `role` pekar på en nyckel i
// translations[språk].staff.roles.
// Byt ut `image` mot sökvägen till det riktiga fotot, t.ex. '/personal/pinchers.jpg'
// (lägg bilden i public/-mappen).
const STAFF = [
  { name: 'Pinchers', role: 'master', image: '/staff-placeholder.svg' },
  { name: 'Mikaela', role: 'hairdresser', image: '/staff-placeholder.svg' },
  { name: 'Sammy Frisör', role: 'hairdresser', image: '/staff-placeholder.svg' },
  { name: 'Kevin', role: 'trainee', image: '/staff-placeholder.svg' },
]

function Staff() {
  const { t } = useLanguage()

  return (
    <section className="staff" id="personal">
      <div className="staff__inner">
        <header className="staff__header">
          <p className="staff__eyebrow">{t.staff.eyebrow}</p>
          <h2 className="staff__title">{t.staff.title}</h2>
        </header>

        <ul className="staff__grid">
          {STAFF.map((member) => (
            <li className="member" key={member.name}>
              <img className="member__photo" src={member.image} alt="" />
              <h3 className="member__name">{member.name}</h3>
              <p className="member__role">{t.staff.roles[member.role]}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Staff
