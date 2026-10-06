export default function HowItWorks() {
  return (
    <section className="sec" id="how-it-works" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>How It Works</h2>
          <p>We're not here to just hand you a website. We build a simple online system designed to turn visitors into genuine customer enquiries.</p>
        </div>
        <ol className="steps" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li className="step">
            <span className="n">1</span>
            <span className="time">STAGE 01</span>
            <h3>Discover</h3>
            <p>We analyze your business to uncover where your ideal customers are searching and how to capture their attention.</p>
          </li>
          <li className="step">
            <span className="n">2</span>
            <span className="time">STAGE 02</span>
            <h3>Build</h3>
            <p>We create a high-performance website tailored specifically to drive bookings, calls, and qualified enquiries.</p>
          </li>
          <li className="step">
            <span className="n">3</span>
            <span className="time">STAGE 03</span>
            <h3>Track</h3>
            <p>We implement tracking so you can see exactly how many enquiries are generated and where they come from.</p>
          </li>
          <li className="step">
            <span className="n">4</span>
            <span className="time">STAGE 04</span>
            <h3>Grow</h3>
            <p>You pay only for genuine, trackable customer enquiries, eliminating the risk of paying for empty traffic.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
