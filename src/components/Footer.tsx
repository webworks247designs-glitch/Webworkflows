import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          
          <div className="foot-brand">
            <a className="brand" href="#top" style={{ marginRight: 0 }}>
              <span className="mark" aria-hidden="true"></span>
              <span>Webworkflo&apos;s</span>
            </a>
            <p className="foot-desc">
              Websites, design systems &amp; digital craft built by hand in Hyderabad.
            </p>
          </div>

          <div className="foot-nav-col">
            <span className="foot-col-title">Navigation</span>
            <nav className="foot-nav" aria-label="Footer">
              <a href="#work">Work</a>
              <a href="#how-it-works">Process</a>
              <a href="#pricing">Pricing</a>
              <a href="#cost-flow">Example</a>
              <a href="#ai-assistant">AI Assistant (Meera)</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="foot-google">
            <a
              href="https://www.google.co.in/search?utm_medium=noren&utm_source=gbp&utm_campaign=2026&q=Webworkflo%27s&ludocid=13756383820960255399&lsig=AB86z5V9nz1E1uhJ3Hct0m5oRCII#ebo=0"
              target="_blank"
              rel="noopener noreferrer"
              className="foot-google-link"
              aria-label="Check us out on Google"
            >
              <div className="foot-google-info">
                <div className="foot-google-header">
                  <svg className="foot-google-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span className="foot-google-title">Find us on Google</span>
                </div>
                <span className="foot-google-sub">Verified Business Profile</span>
                <span className="foot-google-cta">Tap to view reviews &rarr;</span>
              </div>

              <div className="foot-google-qr-wrap">
                <Image
                  src="/images/google-qr.png"
                  alt="Find us on Google QR Code"
                  width={100}
                  height={100}
                  className="foot-google-qr"
                  style={{ width: 'auto', height: 'auto', borderRadius: '8px' }}
                />
              </div>
            </a>
          </div>

        </div>

        <div className="foot-bottom">
          <p className="copy">&copy; {year} <span>Webworkflo&apos;s</span>. Designed and built by hand in Hyderabad.</p>
        </div>
      </div>
    </footer>
  );
}
