import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__name">Pincher&rsquo;s Barbershop</p>

        <div className="footer__est">
          <span className="footer__est-year">Est. 2001</span>
          <span className="footer__est-route">
            Jamaica <span aria-hidden="true">&rarr;</span> Göteborg
          </span>
        </div>

        <p className="footer__address">
          Andra Långgatan 8 <span aria-hidden="true">&middot;</span> Göteborg
        </p>

        <p className="footer__copyright">
          <span aria-hidden="true">&copy;</span> Pincher&rsquo;s Barbershop
        </p>
      </div>
    </footer>
  )
}

export default Footer
