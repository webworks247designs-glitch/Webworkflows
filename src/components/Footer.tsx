import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="wrap foot-in" style={{ alignItems: 'flex-start', justifyContent: 'space-between', gap: '40px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '300px' }}>
          <a className="brand" href="#top" style={{ marginRight: 0 }}>
            <span className="mark" aria-hidden="true"></span>
            <span>Webworkflo's</span>
          </a>
          <p className="copy">&copy; {year} <span>Webworkflo's</span>. Designed and built by hand in Hyderabad.</p>
        </div>

        <nav aria-label="Footer" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 32px' }}>
          <a href="#work">Work</a>
          <a href="#how-it-works">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#cost-flow">Example</a>
          <a href="#protection">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '16px 24px', background: 'var(--surface)', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: '0 10px 30px -15px rgba(var(--shadow), 0.2)' }}>
          <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--ink)', textAlign: 'center' }}>Check us out on Google</span>
          <a href="https://www.google.co.in/search?utm_medium=noren&utm_source=gbp&utm_campaign=2026&q=Webworkflo%27s&ludocid=13756383820960255399&lsig=AB86z5V9nz1E1uhJ3Hct0m5oRCII#ebo=0" target="_blank" rel="noopener noreferrer">
            <Image src="/images/google-qr.png" alt="Find us on Google QR Code" width={110} height={110} style={{ borderRadius: '12px', cursor: 'pointer' }} />
          </a>
        </div>

      </div>
    </footer>
  );
}
