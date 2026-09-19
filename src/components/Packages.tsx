export default function Packages() {
  return (
    <section className="sec" id="packages" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>Ways to work together.</h2>
          <p>Start with the closest fit. I&apos;ll adjust the scope to your goals and give you a fixed quote.</p>
        </div>
        <div className="pkgs">
          <article className="pkg">
            <h3>Launch page</h3>
            <p className="for">One page that explains one offer clearly. Good for a product, an event or an ad campaign.</p>
            <p className="time">Ready in 5 to 7 days</p>
            <ul>
              <li>One custom-designed page</li>
              <li>Mobile-first build</li>
              <li>Contact form and WhatsApp button</li>
              <li>Basic SEO and analytics setup</li>
            </ul>
            <p className="price">Quote after a short chat</p>
            <a className="btn btn-ghost" data-wa="Hi, I'm interested in the Launch page package." href="#contact">Get a quote</a>
          </article>
          <article className="pkg feat">
            <span className="badge">Most requested</span>
            <h3>Business website</h3>
            <p className="for">A complete site with everything customers look for. Good for clinics, studios, shops and consultants.</p>
            <p className="time">Ready in 2 to 3 weeks</p>
            <ul>
              <li>4 to 8 custom-designed pages</li>
              <li>Design approved in Figma before coding</li>
              <li>Easy content editing (CMS)</li>
              <li>Speed and SEO setup</li>
              <li>30 days of free fixes</li>
            </ul>
            <p className="price">Quote after a short chat</p>
            <a className="btn btn-wa" data-wa="Hi, I'm interested in the Business website package." href="#contact">
              <svg className="ic"><use href="#i-wa"/></svg>Get a quote
            </a>
          </article>
          <article className="pkg">
            <h3>Custom build</h3>
            <p className="for">Stores, web apps and dashboards with more moving parts. Good for start-ups and growing brands.</p>
            <p className="time">From 4 weeks</p>
            <ul>
              <li>Online store or app interface</li>
              <li>Design system and reusable components</li>
              <li>Animation and 3D effects</li>
              <li>Payments, booking or CRM integrations</li>
              <li>Optional monthly care plan</li>
            </ul>
            <p className="price">Quote after a short chat</p>
            <a className="btn btn-ghost" data-wa="Hi, I'm interested in the Custom build package." href="#contact">Get a quote</a>
          </article>
        </div>
      </div>
    </section>
  );
}
