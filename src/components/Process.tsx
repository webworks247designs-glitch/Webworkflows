export default function Process() {
  return (
    <section className="sec" id="process" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>How a project runs, start to launch.</h2>
          <p>Five clear steps, so you always know what happens next and what I need from you.</p>
        </div>
        <ol className="steps" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li className="step"><span className="n">1</span><span className="time">Day 1</span><h3>Intro chat</h3><p>We talk on WhatsApp or a short call. You share goals and examples you like. I reply with a scope and a quote.</p></li>
          <li className="step"><span className="n">2</span><span className="time">2 to 3 days</span><h3>Plan</h3><p>I map the pages and sketch wireframes, so we agree on structure before styling begins.</p></li>
          <li className="step"><span className="n">3</span><span className="time">4 to 7 days</span><h3>Design</h3><p>Full-colour designs in Figma. Two rounds of changes are included.</p></li>
          <li className="step"><span className="n">4</span><span className="time">1 to 2 weeks</span><h3>Build and test</h3><p>I code the site, test it on real devices and connect forms, analytics and your CMS.</p></li>
          <li className="step"><span className="n">5</span><span className="time">Launch day</span><h3>Launch and support</h3><p>Go-live, a short handover video and 30 days of free fixes.</p></li>
        </ol>
        <p className="steps-note">Most websites launch in 2 to 4 weeks.</p>
      </div>
    </section>
  );
}
