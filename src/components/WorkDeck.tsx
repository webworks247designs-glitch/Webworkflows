"use client";

import { useEffect, useRef } from "react";

const PROJECTS = [
  { name: 'The Boat House', kind: 'Restaurant website with online ordering', year: '2026', domain: 'boat-house-site.vercel.app', mock: 'boathouse',
    colors: { b: '#1C1917', f: '#FFFFFF', a: '#EAB308', s: '#292524', on: '#000000' }, font: "Georgia,'Times New Roman',serif",
    desc: 'A premium Arabic restaurant needed an elegant website highlighting their slow-smoked Mandi and dum biryani, with a seamless online ordering menu.',
    result: 'Increased online orders and a stronger brand presentation.', tags: ['Restaurant', 'Online ordering', 'Web design'], shot: '' },
  { name: 'Srishanth M. Portfolio', kind: 'Personal portfolio for AI Engineer', year: '2026', domain: 'srishanth-seven.vercel.app', mock: 'srishanth',
    colors: { b: '#0B1120', f: '#FFFFFF', a: '#06B6D4', s: '#1E293B', on: '#000000' }, font: "system-ui,'Segoe UI',sans-serif",
    desc: 'A personal portfolio for an AI & Embedded Systems builder. It showcases skills and projects with a sleek, technical dark mode aesthetic.',
    result: 'A compelling professional presence that highlights engineering expertise.', tags: ['Portfolio', 'Dark mode', 'Personal brand'], shot: '' },
  { name: "Shobana Men's Salon", kind: 'Barbershop website with bookings', year: '2026', domain: 'shobanamensalon.vercel.app', mock: 'salon',
    colors: { b: '#171717', f: '#ffffff', a: '#FDE047', s: '#262626', on: '#000000' }, font: "system-ui,'Segoe UI',sans-serif",
    desc: 'A premium men\'s salon needed a sleek online presence for bookings and service menus. I built a dark-themed site with a clear service list and instant booking.',
    result: 'Elevated brand image and streamlined appointment booking.', tags: ['Website design', 'Booking flow', 'Dark mode'], shot: '' },
  { name: 'Kaveri Kitchen', kind: 'Restaurant website with online ordering', year: '2026', domain: 'kaverikitchen.example', mock: 'food',
    colors: { b: '#FFF3DC', f: '#3B1D0E', a: '#D9480F', s: '#FFE0AE', on: '#FFFFFF' }, font: "Georgia,'Times New Roman',serif",
    desc: 'A home-style tiffin service wanted customers to order without phoning. I designed a menu-first site with a three-tap ordering flow and built it to load fast on mobile data.',
    result: 'Customers order in three taps, with no phone call needed.', tags: ['UI/UX design', 'Frontend build', 'Ordering flow'], shot: '' },
  { name: 'Northwind Physio', kind: 'Clinic website with online booking', year: '2026', domain: 'northwindphysio.example', mock: 'clinic',
    colors: { b: '#EAF7F6', f: '#0B3B3C', a: '#0E8F9B', s: '#CDEEEB', on: '#FFFFFF' }, font: "system-ui,'Segoe UI',sans-serif",
    desc: 'A physiotherapy clinic needed new patients to book easily. I simplified the service pages and put a booking widget on the first screen.',
    result: 'Booking takes under a minute on any phone.', tags: ['Website design', 'Booking UI', 'Accessibility'], shot: '' }
];

const MockFood = () => (
  <>
    <div className="m-nav"><b className="m-logo">Kaveri Kitchen</b><span className="m-links"><span>Menu</span><span>Plans</span><span>Our story</span></span><span className="m-btn">Order now</span></div>
    <div className="m-hero"><div><div className="m-h1">Home-style meals, delivered hot.</div><p className="m-p">Fresh tiffins cooked every morning. Order by 10 am for lunch.</p><span className="m-btn">See today&apos;s menu</span></div><div className="m-plate"></div></div>
    <div className="m-sec"><div className="m-h2">Today&apos;s menu</div><div className="m-row m-c3">
      {[
        ['Veg meals', '149'],
        ['Chicken curry meals', '199'],
        ['Millet bowl', '129']
      ].map((d, i) => (
        <div className="m-dish" key={i}><div className={`m-mini m-mini${i}`}></div><b>{d[0]}</b><span>&#8377;{d[1]}</span></div>
      ))}
    </div></div>
    <div className="m-sec m-alt"><div className="m-h2">Order in three taps</div><div className="m-row m-c3">
      {['Pick your meal', 'Choose a time', 'Pay with UPI'].map((t, i) => (
        <div className="m-step" key={i}><b>{i + 1}</b><span>{t}</span></div>
      ))}
    </div></div>
    <div className="m-sec m-fill m-cta"><div className="m-h2">Open daily, 7 am to 9 pm</div><span className="m-btn m-btn-inv">Order now</span></div>
  </>
);

const MockClinic = () => (
  <>
    <div className="m-nav"><b className="m-logo">Northwind Physio</b><span className="m-links"><span>Services</span><span>Team</span><span>Contact</span></span><span className="m-btn">Book a session</span></div>
    <div className="m-hero"><div><div className="m-h1">Move better. Book in under a minute.</div><p className="m-p">Physiotherapy for back pain, sports injuries and recovery.</p><span className="m-btn">Book now</span></div>
    <div className="m-book"><b>Pick a time</b><div className="m-chips">
      {['9:00', '9:30', '10:00', '10:30', '11:00', '11:30'].map((t, i) => (
        <span className={i === 2 ? 'on' : ''} key={i}>{t}</span>
      ))}
    </div><span className="m-btn m-block">Confirm booking</span></div></div>
    <div className="m-sec"><div className="m-h2">What we treat</div><div className="m-row m-c4">
      {['Back pain', 'Sports injury', 'Posture', 'Rehab'].map((t, i) => (
        <div className="m-svc" key={i}><i></i><span>{t}</span></div>
      ))}
    </div></div>
    <div className="m-sec m-alt"><div className="m-h2">Meet the team</div><div className="m-row m-c3">
      {['Sports physio', 'Rehab specialist', 'Posture care'].map((t, i) => (
        <div key={i}><div className="m-av"></div><b style={{ display: 'block', marginTop: '.8em', fontSize: '1.15em' }}>{t}</b><span className="m-line s"></span></div>
      ))}
    </div></div>
    <div className="m-sec m-fill"><div className="m-quote">&#8220;I was moving without pain in three weeks.&#8221;</div><span className="m-line"></span><span className="m-line s"></span></div>
  </>
);

const MockStore = () => (
  <>
    <div className="m-nav"><b className="m-logo">Loom &amp; Leaf</b><span className="m-links"><span>Shop</span><span>Our story</span><span>Journal</span></span><span className="m-btn">Cart (2)</span></div>
    <div className="m-banner"><div className="m-h1">Handmade, slowly woven.</div><span className="m-btn">Shop new arrivals</span></div>
    <div className="m-sec"><div className="m-tags">
      {['All', 'Throws', 'Cushions', 'Rugs', 'Baskets'].map((t, i) => (
        <span className={i === 0 ? 'on' : ''} key={i}>{t}</span>
      ))}
    </div><div className="m-row m-c3">
      {[1499, 899, 2999, 1199, 749, 3499].map((p, i) => (
        <div className="m-prod" key={i}><div className={`m-img m-img${i % 3}`}></div><span className="m-line"></span><b>&#8377;{p}</b></div>
      ))}
    </div></div>
    <div className="m-sec m-alt m-fill"><div className="m-h2">Join the Loom &amp; Leaf list</div><span className="m-btn">Subscribe</span></div>
  </>
);

const MockSaas = () => (
  <>
    <div className="m-nav"><b className="m-logo">Finlytics</b><span className="m-links"><span>Product</span><span>Pricing</span><span>Docs</span></span><span className="m-btn">Start free</span></div>
    <div className="m-center"><div className="m-h1">Know your cash runway before it becomes a problem.</div><p className="m-p">Live cash, burn and forecasts in one calm dashboard.</p><span className="m-btn">Start free</span><span className="m-btn m-ghost">Book a demo</span></div>
    <div className="m-dash"><div className="m-stats">
      {[['Cash', '\u20B94.2 Cr'], ['Monthly burn', '\u20B918 L'], ['Runway', '23 months']].map((s, i) => (
        <div className="m-stat" key={i}><span>{s[0]}</span><b>{s[1]}</b></div>
      ))}
    </div><div className="m-chart">
      {[40, 52, 46, 60, 55, 68, 62, 74, 70, 82, 78, 90].map((h, i) => (
        <i style={{ height: `${h}%` }} key={i}></i>
      ))}
    </div></div>
    <div className="m-sec"><div className="m-h2">Built for finance teams</div><div className="m-row m-c3">
      {['Live cash view', 'Scenario planner', 'Investor reports'].map((t, i) => (
        <div className="m-feat" key={i}><i></i><b>{t}</b><span className="m-line"></span><span className="m-line s"></span></div>
      ))}
    </div></div>
    <div className="m-sec m-fill"><div className="m-h2">Simple pricing</div><div className="m-row m-c3">
      {[['Starter', 'Free'], ['Growth', '\u20B9999'], ['Scale', 'Custom']].map((s, i) => (
        <div className={`m-price${i === 1 ? ' on' : ''}`} key={i}><span>{s[0]}</span><b>{s[1]}</b><span className="m-line"></span><span className="m-line s"></span></div>
      ))}
    </div></div>
  </>
);

const MockPhoto = () => (
  <>
    <div className="m-nav"><b className="m-logo">Studio Ren</b><span className="m-links"><span>Work</span><span>About</span><span>Contact</span></span><span className="m-btn">Book a shoot</span></div>
    <div className="m-name">Light, honestly.</div>
    <div className="m-gal">
      {[['18em', 0], ['12em', 1], ['14em', 2], ['20em', 3], ['11em', 4], ['16em', 5], ['13em', 1], ['19em', 2], ['12em', 0]].map((g, i) => (
        <i className={`m-g${g[1]}`} style={{ height: g[0] as string }} key={i}></i>
      ))}
    </div>
    <div className="m-sec m-fill m-two"><div className="m-h2">Weddings, portraits and quiet moments.</div><span className="m-btn">Say hello</span></div>
  </>
);

const MockSalon = () => (
  <a href="https://shobanamensalon.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
    <img src="/images/salon1.png" alt="Shobana Men's Salon 1" style={{ width: '100%', display: 'block' }} />
    <img src="/images/salon2.png" alt="Shobana Men's Salon 2" style={{ width: '100%', display: 'block' }} />
    <img src="/images/salon3.png" alt="Shobana Men's Salon 3" style={{ width: '100%', display: 'block' }} />
    <img src="/images/salon4.png" alt="Shobana Men's Salon 4" style={{ width: '100%', display: 'block' }} />
    <img src="/images/salon5.png" alt="Shobana Men's Salon 5" style={{ width: '100%', display: 'block' }} />
    <img src="/images/salon6.png" alt="Shobana Men's Salon 6" style={{ width: '100%', display: 'block' }} />
  </a>
);

const MockSrishanth = () => (
  <a href="https://srishanth-seven.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
    <img src="/images/srishanth1.png" alt="Srishanth Portfolio 1" style={{ width: '100%', display: 'block' }} />
    <img src="/images/srishanth2.png" alt="Srishanth Portfolio 2" style={{ width: '100%', display: 'block' }} />
    <img src="/images/srishanth3.png" alt="Srishanth Portfolio 3" style={{ width: '100%', display: 'block' }} />
  </a>
);

const MockBoatHouse = () => (
  <a href="https://boat-house-site.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
    <img src="/images/boathouse1.png" alt="Boat House 1" style={{ width: '100%', display: 'block' }} />
    <img src="/images/boathouse2.png" alt="Boat House 2" style={{ width: '100%', display: 'block' }} />
    <img src="/images/boathouse3.png" alt="Boat House 3" style={{ width: '100%', display: 'block' }} />
  </a>
);

const getMockComponent = (mockName: string) => {
  switch (mockName) {
    case 'boathouse': return <MockBoatHouse />;
    case 'srishanth': return <MockSrishanth />;
    case 'salon': return <MockSalon />;
    case 'food': return <MockFood />;
    case 'clinic': return <MockClinic />;
    case 'store': return <MockStore />;
    case 'saas': return <MockSaas />;
    case 'photo': return <MockPhoto />;
    default: return null;
  }
};

export default function WorkDeck() {
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!deckRef.current) return;
    
    const slots = Array.from(deckRef.current.querySelectorAll('.slot')) as HTMLElement[];
    const cards = Array.from(deckRef.current.querySelectorAll('.card')) as HTMLElement[];
    let tops: number[] = [];
    let vh = window.innerHeight;
    let queued = false;
    
    const st = cards.map(() => ({ s: 1, rx: 0, tx: 0, ty: 0 }));

    const measure = () => {
      vh = window.innerHeight;
      tops = slots.map(s => parseFloat(getComputedStyle(s).top) || 0);
    };

    const apply = (i: number) => {
      const s = st[i];
      cards[i].style.transform = `perspective(1400px) rotateX(${(s.rx + s.tx).toFixed(2)}deg) rotateY(${s.ty.toFixed(2)}deg) scale(${s.s.toFixed(4)})`;
    };

    const update = () => {
      queued = false;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      const cov = slots.map((sl, i) => {
        const span = Math.max(vh - tops[i], 1);
        return Math.min(Math.max((vh - sl.getBoundingClientRect().top) / span, 0), 1);
      });
      
      let front = 0;
      cov.forEach((c, i) => { if (c >= 0.98) front = i; });
      
      for (let i = 0; i < slots.length; i++) {
        if (!reduce) {
          let depth = 0;
          for (let j = i + 1; j < slots.length; j++) depth += cov[j];
          st[i].s = 1 - Math.min(depth * 0.025, 0.1);
          st[i].rx = -(1 - cov[i]) * 8;
          cards[i].style.setProperty('--dim', Math.min(depth * 0.1, 0.42).toFixed(3));
          apply(i);
        }
        slots[i].classList.toggle('is-front', i === front);
      }
    };

    const queue = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };

    measure();
    update();

    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', () => { measure(); queue(); });

    // Handle hover 3D effect
    cards.forEach((card, i) => {
      card.addEventListener('pointermove', (e: PointerEvent) => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce || e.pointerType !== 'mouse' || !slots[i].classList.contains('is-front')) return;
        const r = card.getBoundingClientRect();
        st[i].ty = ((e.clientX - r.left) / r.width - 0.5) * 4;
        st[i].tx = -((e.clientY - r.top) / r.height - 0.5) * 4;
        apply(i);
      });
      card.addEventListener('pointerleave', () => {
        st[i].tx = 0;
        st[i].ty = 0;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!reduce) apply(i);
      });
    });

    return () => {
      window.removeEventListener('scroll', queue);
    };
  }, []);

  const handleTabClick = (i: number) => {
    if (!deckRef.current) return;
    const slots = Array.from(deckRef.current.querySelectorAll('.slot')) as HTMLElement[];
    const slot = slots[i];
    const tops = slots.map(s => parseFloat(getComputedStyle(s).top) || 0);
    const gap = parseFloat(getComputedStyle(slot).marginBottom) || 0;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const natural = deckRef.current.getBoundingClientRect().top + window.scrollY + i * (slot.offsetHeight + gap);
    window.scrollTo({ top: natural - tops[i], behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section className="sec work" id="work">
      <div className="wrap">
        <div className="sec-head">
          <h2>Recent work</h2>
          <p>
            <span className="only-hover">Scroll to flip through the deck. Hover a card to browse the full website inside it. Click a tab to jump back to any project.</span>
            <span className="only-touch">Scroll to flip through the deck. The website inside the front card scrolls by itself. Tap a tab to jump back to any project.</span>
          </p>
        </div>
        
        <div className="deck" id="deck" ref={deckRef} style={{ "--n": PROJECTS.length } as React.CSSProperties}>
          {PROJECTS.map((p, i) => {
            const c = p.colors;
            const vars = {
              '--mb': c.b, '--mf': c.f, '--ma': c.a, '--ms': c.s, '--mon': c.on, '--mfont': p.font,
              '--ac': c.a, '--i': i
            } as React.CSSProperties;

            return (
              <div className="slot" style={vars} key={i}>
                <article className="card" style={vars} aria-label={p.name}>
                  <button className="tab" type="button" onClick={() => handleTabClick(i)} aria-label={`Bring ${p.name} to the front`}>
                    <span className="dot"></span>
                    <span className="name">{p.name}</span>
                    <span className="kind">{p.kind}</span>
                    <span className="yr">{p.year}</span>
                  </button>
                  <div className="body">
                    <div className="browser" role="img" aria-label={`Scrolling preview of the ${p.name} website`}>
                      <div className="bar"><i></i><i></i><i></i><span className="url">{p.domain}</span></div>
                      <div className="view">
                        <div className="page" style={vars}>
                          {getMockComponent(p.mock)}
                        </div>
                      </div>
                    </div>
                    <div className="info">
                      <h3>{p.name}</h3>
                      <p className="desc">{p.desc}</p>
                      <ul className="tags">
                        {p.tags.map(t => <li key={t}>{t}</li>)}
                      </ul>
                      <p className="result"><b>Result</b>{p.result}</p>
                      <a className="btn btn-ghost btn-sm" href="#contact">Ask for something similar</a>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        <div className="deck-end">
          <h3>Want your project on top of the deck?</h3>
          <div className="cta-row">
            <a className="btn btn-wa" href="#contact"><svg className="ic"><use href="#i-wa"/></svg>Chat on WhatsApp</a>
            <a className="btn btn-ghost" href="#contact"><svg className="ic"><use href="#i-mail"/></svg>Email me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
