export default function HowItWorks() {
  return (
    <section className="sec" id="how-it-works" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>How It Works</h2>
          <p>We're not here to just hand you a website. We build a simple online system designed to turn visitors into genuine customer enquiries.</p>
        </div>
        <ol className="steps" style={{ listStyle: 'none', margin: 0, padding: 0, gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
          <li className="step"><span className="n">1</span><span className="time">STAGE 01</span><h3>Discover</h3><p>We find businesses that already have customers searching for them online but don't have a strong website experience.</p></li>
          <li className="step"><span className="n">2</span><span className="time">STAGE 02</span><h3>Build</h3><p>We create a website around the way your business actually gets customers — whether that's bookings, reservations, service enquiries or product orders.</p></li>
          <li className="step"><span className="n">3</span><span className="time">STAGE 03</span><h3>Track</h3><p>Every enquiry generated through the website is recorded so you can see what is actually happening.</p></li>
          <li className="step"><span className="n">4</span><span className="time">STAGE 04</span><h3>Grow</h3><p>You pay for genuine, trackable enquiries rather than simply paying for website traffic.</p></li>
        </ol>
      </div>
    </section>
  );
}
