import './Staff.css'

// Byt ut `image` mot sökvägen till det riktiga fotot, t.ex. '/personal/pinchers.jpg'
// (lägg bilden i public/-mappen).
const STAFF = [
  {
    name: 'Pinchers',
    role: 'Master Barber / Designer & Director / Personal Trainer',
    image: '/staff-placeholder.svg',
  },
  { name: 'Mikaela', role: 'Frisör', image: '/staff-placeholder.svg' },
  { name: 'Sammy Frisör', role: 'Frisör', image: '/staff-placeholder.svg' },
  { name: 'Kevin', role: 'Elev', image: '/staff-placeholder.svg' },
]

function Staff() {
  return (
    <section className="staff" id="personal">
      <div className="staff__inner">
        <header className="staff__header">
          <p className="staff__eyebrow">Personal</p>
          <h2 className="staff__title">Möt teamet</h2>
        </header>

        <ul className="staff__grid">
          {STAFF.map((member) => (
            <li className="member" key={member.name}>
              <img className="member__photo" src={member.image} alt="" />
              <h3 className="member__name">{member.name}</h3>
              <p className="member__role">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Staff
