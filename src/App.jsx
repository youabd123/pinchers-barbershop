import './App.css'

function App() {
  return (
    <main className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">Est. Jamaica &middot; Sverige</p>

        <h1 className="hero__title">
          Pincher&rsquo;s
          <span className="hero__title-line">Barbershop</span>
        </h1>

        <div className="hero__rule" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <p className="hero__city">Göteborg</p>

        <p className="hero__tagline">
          Skarpa fades, rena linjer och karibisk själ &mdash; mitt i stan.
        </p>

        <a className="hero__cta" href="#boka">
          Boka tid
        </a>
      </div>
    </main>
  )
}

export default App
