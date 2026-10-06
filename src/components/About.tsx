export default function About() {
  return (
    <section className="sec" id="about" style={{ paddingTop: 0 }}>
      <div className="wrap about-grid">
        <div className="portrait" id="portrait" aria-hidden="true" style={{ overflow: 'hidden', padding: 0, backgroundColor: '#0B1120', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/images/portrait.png" alt="Portrait" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div className="about-copy">
          <h2>One designer, from first sketch to launch day.</h2>
          <p>I&apos;m a freelance frontend designer. I do the design, the code and the launch, so nothing gets lost between a designer and a developer.</p>
          <p>I care about three things: a site that looks like your business, loads fast on a mid-range phone, and is simple for you to update.</p>
          <ul className="why">
            <li><strong>You talk to me directly</strong><span>No account managers. Questions get answered by the person building your site.</span></li>
            <li><strong>Clear scope and quote</strong><span>You know what is included and what it costs before we start.</span></li>
            <li><strong>Built to load fast</strong><span>Light pages, optimised images and clean code that search engines can read.</span></li>
            <li><strong>Support after launch</strong><span>30 days of free fixes, then optional monthly care.</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
