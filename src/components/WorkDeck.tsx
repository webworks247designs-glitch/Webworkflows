"use client";

import { useEffect, useRef } from "react";

const PROJECTS = [
  {
    name: 'The Boat House',
    kind: 'Restaurant website with online ordering',
    year: '2026',
    domain: 'boat-house-site.vercel.app',
    mock: 'boathouse',
    category: 'Restaurant',
    colors: { b: '#1C1917', f: '#FFFFFF', a: '#EAB308', s: '#292524', on: '#000000' },
    font: "Georgia,'Times New Roman',serif",
    desc: 'A premium Arabic restaurant needed an elegant website highlighting their slow-smoked Mandi and dum biryani, with a seamless online ordering menu.',
    result: 'Increased online orders and a stronger brand presentation.',
    tags: ['Restaurant', 'Online ordering', 'Web design'],
    liveUrl: 'https://boat-house-site.vercel.app/'
  },
  {
    name: "Shobana Men's Salon",
    kind: 'Barbershop website with bookings',
    year: '2026',
    domain: 'shobanamensalon.vercel.app',
    mock: 'salon',
    category: 'Salon',
    colors: { b: '#171717', f: '#ffffff', a: '#FDE047', s: '#262626', on: '#000000' },
    font: "system-ui,'Segoe UI',sans-serif",
    desc: 'A premium men\'s salon needed a sleek online presence for bookings and service menus. Built a dark-themed site with a clear service list and instant booking flow.',
    result: 'Elevated brand image and streamlined appointment booking.',
    tags: ['Barbershop', 'Booking flow', 'Dark mode'],
    liveUrl: 'https://shobanamensalon.vercel.app/'
  },
  {
    name: 'Srishanth M. Portfolio',
    kind: 'Personal portfolio for AI Engineer',
    year: '2026',
    domain: 'srishanth-seven.vercel.app',
    mock: 'srishanth',
    category: 'Tech Portfolio',
    colors: { b: '#0B1120', f: '#FFFFFF', a: '#06B6D4', s: '#1E293B', on: '#000000' },
    font: "system-ui,'Segoe UI',sans-serif",
    desc: 'A personal portfolio for an AI & Embedded Systems builder. It showcases skills and projects with a sleek, technical dark mode aesthetic.',
    result: 'A compelling professional presence that highlights engineering expertise.',
    tags: ['Portfolio', 'Next.js', 'Personal brand'],
    liveUrl: 'https://srishanth-seven.vercel.app/'
  },
  {
    name: 'Kaveri Kitchen & Bakehouse',
    kind: 'Artisanal bakery with pre-order menu',
    year: '2026',
    domain: 'kaverikitchen.com',
    mock: 'bakery',
    category: 'Bakery',
    colors: { b: '#2D1B13', f: '#FFF8F0', a: '#E07A5F', s: '#3D281D', on: '#FFFFFF' },
    font: "Georgia,serif",
    desc: 'Artisanal sourdough bakery and cloud kitchen requiring an appetizing digital menu, fresh bake alerts, and custom cake preorder enquiries.',
    result: 'Daily bake sellouts and effortless catering orders directly through WhatsApp.',
    tags: ['Bakery', 'Digital menu', 'Custom orders'],
    liveUrl: '#contact'
  },
  {
    name: 'Northwind Physio & Wellness',
    kind: 'Healthcare clinic with appointment calendar',
    year: '2026',
    domain: 'northwindphysio.in',
    mock: 'clinic',
    category: 'Healthcare',
    colors: { b: '#0E2A36', f: '#F0FDF4', a: '#0D9488', s: '#153C4D', on: '#FFFFFF' },
    font: "system-ui,sans-serif",
    desc: 'Modern sports physiotherapy and rehabilitation clinic designed to build patient trust, display specialist certifications, and capture qualified session bookings.',
    result: '3.4x increase in patient consultation bookings without phone tag.',
    tags: ['Healthcare', 'Appointments', 'Patient trust'],
    liveUrl: '#contact'
  },
  {
    name: 'Loom & Leaf Lifestyle Store',
    kind: 'Boutique Japandi e-commerce website',
    year: '2026',
    domain: 'loomandleaf.shop',
    mock: 'store',
    category: 'E-commerce',
    colors: { b: '#1C1917', f: '#FAFAF9', a: '#D97706', s: '#292524', on: '#FFFFFF' },
    font: "system-ui,sans-serif",
    desc: 'Minimalist e-commerce storefront for handcrafted ceramics, organic linen throws, and curated lifestyle goods with rupee pricing, instant cart drawer, and UPI checkout.',
    result: 'Substantial boost in checkout completion rates with mobile-first browsing.',
    tags: ['E-commerce', 'Curated catalog', 'UPI checkout'],
    liveUrl: '#contact'
  }
];

const MockSalon = () => (
  <a href="https://shobanamensalon.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
    <img src="/images/salon1.png" alt="Shobana Men's Salon 1" style={{ width: '100%', display: 'block' }} />
    <img src="/images/salon2.png" alt="Shobana Men's Salon 2" style={{ width: '100%', display: 'block' }} />
    <img src="/images/salon3.png" alt="Shobana Men's Salon 3" style={{ width: '100%', display: 'block' }} />
  </a>
);

const MockSrishanth = () => (
  <a href="https://srishanth-seven.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
    <img src="/images/srishanth1.png" alt="Srishanth Portfolio 1" style={{ width: '100%', display: 'block' }} />
    <img src="/images/srishanth2.png" alt="Srishanth Portfolio 2" style={{ width: '100%', display: 'block' }} />
  </a>
);

const MockBoatHouse = () => (
  <a href="https://boat-house-site.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
    <img src="/images/boathouse1.png" alt="Boat House 1" style={{ width: '100%', display: 'block' }} />
    <img src="/images/boathouse2.png" alt="Boat House 2" style={{ width: '100%', display: 'block' }} />
  </a>
);

const MockBakery = () => (
  <a href="#contact" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
    <img src="/images/bakery-showcase.jpg" alt="Kaveri Kitchen & Bakery Website" style={{ width: '100%', display: 'block' }} />
  </a>
);

const MockClinic = () => (
  <a href="#contact" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
    <img src="/images/clinic-showcase.jpg" alt="Northwind Physio & Wellness Website" style={{ width: '100%', display: 'block' }} />
  </a>
);

const MockStore = () => (
  <a href="#contact" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
    <img src="/images/ecommerce-showcase.jpg" alt="Loom & Leaf Boutique Website" style={{ width: '100%', display: 'block' }} />
  </a>
);

const getMockComponent = (mockName: string) => {
  switch (mockName) {
    case 'boathouse': return <MockBoatHouse />;
    case 'salon': return <MockSalon />;
    case 'srishanth': return <MockSrishanth />;
    case 'bakery': return <MockBakery />;
    case 'clinic': return <MockClinic />;
    case 'store': return <MockStore />;
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
        
        <div className="work-filters" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {PROJECTS.map((p, i) => (
            <button
              key={i}
              type="button"
              className="sample-pill"
              onClick={() => handleTabClick(i)}
              aria-label={`Jump to ${p.name}`}
            >
              <span>{p.category}</span>
            </button>
          ))}
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
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
                        {p.liveUrl.startsWith('http') ? (
                          <a className="btn btn-wa btn-sm" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                            Live Site ↗
                          </a>
                        ) : null}
                        <a className="btn btn-ghost btn-sm" href="#contact">Ask for similar design</a>
                      </div>
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
