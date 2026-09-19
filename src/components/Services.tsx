export default function Services() {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <div className="sec-head">
          <h2>Everything a website needs, from one person.</h2>
          <p>Pick one service or the whole journey. Twelve things I do, grouped by where they help your business.</p>
        </div>
        <div className="svc-grid">
          <article className="panel p-cobalt">
            <h3>Design</h3>
            <p className="lead">Plan how your site looks and works before any code is written.</p>
            <ul>
              <li><strong>Website UI/UX design</strong><span>Layouts, flows and visual style for landing pages and full websites.</span></li>
              <li><strong>Wireframes and prototypes</strong><span>Clickable Figma prototypes you can test and approve first.</span></li>
              <li><strong>UI kit and design system</strong><span>Colours, type and components so your site stays consistent as it grows.</span></li>
            </ul>
          </article>
          <article className="panel p-butter">
            <h3>Build</h3>
            <p className="lead">Clean, tested code that works on every screen.</p>
            <ul>
              <li><strong>Frontend development</strong><span>HTML, CSS and JavaScript, or React and Next.js for bigger builds.</span></li>
              <li><strong>Responsive websites</strong><span>Layouts that adapt to phones, tablets, laptops and large monitors.</span></li>
              <li><strong>Web app and dashboard interfaces</strong><span>Tables, charts, forms and admin screens people can follow at a glance.</span></li>
            </ul>
          </article>
          <article className="panel p-mint">
            <h3>Sell and grow</h3>
            <p className="lead">Pages and stores built to bring in customers.</p>
            <ul>
              <li><strong>Landing pages</strong><span>One focused page for a launch, an offer or an ad campaign.</span></li>
              <li><strong>E-commerce storefronts</strong><span>Shopify, WooCommerce or custom stores that make buying easy.</span></li>
              <li><strong>CMS setup</strong><span>WordPress, Webflow or a headless CMS, so you can edit content yourself.</span></li>
            </ul>
          </article>
          <article className="panel p-ink">
            <h3>Polish and support</h3>
            <p className="lead">The details that make a site feel finished and stay healthy.</p>
            <ul>
              <li><strong>Animation and 3D effects</strong><span>Scroll effects, micro-interactions and WebGL, used where they help.</span></li>
              <li><strong>Speed, SEO and accessibility</strong><span>Faster loading, search-friendly markup, readable contrast and keyboard support.</span></li>
              <li><strong>Redesign and maintenance</strong><span>Refresh an old site, fix bugs, or keep it updated month to month.</span></li>
            </ul>
          </article>
        </div>
        <p className="svc-note">Not sure what you need? Tell me your goal and I'll suggest the simplest route.
          <a className="btn btn-wa btn-sm" data-wa="Hi, I'm not sure which service I need. Can you suggest the simplest route for my business?" href="#contact">
            <svg className="ic"><use href="#i-wa"/></svg>Ask on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
