import './About.css'

function About() {
  return (
    <section className="about" id="om-oss">
      <div className="about__inner">
        <header className="about__header">
          <p className="about__eyebrow">Vilka vi är</p>
          <h2 className="about__title">Om oss</h2>
        </header>

        <div className="about__text">
          <p>
            Pincher&rsquo;s historia började på en strand på Jamaica, där
            Pinchers redan som tonåring upptäckte sin talang och känsla för
            hår. I början av 90-talet tog han sig till Göteborg och fortsatte
            utveckla sitt hantverk.
          </p>
          <p>
            År 2001 grundade han Pincher&rsquo;s Barbershop. Med sina
            jamaicanska rötter, sin erfarenhet och sin känsla för stil har han
            byggt upp ett starkt namn i staden.
          </p>
          <p>
            Idag är Pinchers en av Göteborgs mest omtalade frisörer inom sin
            genre &ndash; med över två decennier bakom Pincher&rsquo;s
            Barbershop.
          </p>
        </div>

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
