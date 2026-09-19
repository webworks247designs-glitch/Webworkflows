export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <a className="brand" href="#top" style={{ marginRight: 0 }}>
          <span className="mark" aria-hidden="true"></span>
          <span>Webworkflows</span>
        </a>
        <nav aria-label="Footer">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#packages">Packages</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="copy">&copy; {year} <span>Webworkflows</span>. Designed and built by hand.</p>
      </div>
    </footer>
  );
}
