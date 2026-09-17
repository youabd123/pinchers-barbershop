import { asset } from '../config'
import { useLanguage } from '../i18n'
import { useReveal } from '../useReveal'
import './Staff.css'

// Namnen är desamma på båda språken. `role` pekar på en nyckel i
// translations[språk].staff.roles.
const STAFF = [
  {
    name: 'Pinchers',
    role: 'master',
    image: '/images/staff/pinchers-barbershop.jpg',
  },
]

function Staff() {
  const { t } = useLanguage()
  const [revealRef, revealClass] = useReveal('staff')

  return (
    <section className={revealClass} id="personal" ref={revealRef}>
      <div className="staff__inner">
        <header className="staff__header">
          <p className="staff__eyebrow">{t.staff.eyebrow}</p>
          <h2 className="staff__title">{t.staff.title}</h2>
        </header>

        <ul className="staff__grid">
          {STAFF.map((member) => (
            <li className="member" key={member.name}>
              <img
                className="member__photo"
                src={asset(member.image)}
                alt={member.name}
                width="768"
                height="1024"
              />
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
