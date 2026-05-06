const Templates = () => {
  const cats = ['All', 'Agency', 'Business', 'Construction', 'Creative', 'Restaurant', 'Gardening', 'Marketing'];
  const [active, setActive] = React.useState('All');
  const items = [
    { t: 'Launching',        c: 'Creative',     img: '08-launching-min',     hue: '#5b6ee5', bg: '#1e2554' },
    { t: 'Tour & Travels',   c: 'Business',     img: '24-countdown-min',     hue: '#3aa9c4', bg: '#0e3445' },
    { t: 'Maintenance',      c: 'Business',     img: '02-maintenance-min',   hue: '#22C55E', bg: '#0a3a26' },
    { t: 'Insurance',        c: 'Business',     img: '17-insurance-min',     hue: '#4a6cb6', bg: '#16223e' },
    { t: 'Cleaning 02',      c: 'Business',     img: '18-cleaning-min',      hue: '#3ab7d8', bg: '#0d3a4a' },
    { t: 'Plumbing',         c: 'Construction', img: '12-plumber-min',       hue: '#1e88e5', bg: '#0d2b4a' },
    { t: 'Roofing',          c: 'Construction', img: '15-roofing-min',       hue: '#d97a3f', bg: '#3d1f10' },
    { t: 'Handyman',         c: 'Construction', img: '14-handyman-min',      hue: '#f0b53a', bg: '#3a2710' },
    { t: 'Creative 03',      c: 'Creative',     img: '06-flowers-min',       hue: '#e57aa1', bg: '#3d1525' },
    { t: 'Gardening',        c: 'Gardening',    img: '04-nature-min',        hue: '#5fae5e', bg: '#143b1e' },
    { t: 'Digital Agency',   c: 'Agency',       img: '19-digitalagency-min', hue: '#7c5fd8', bg: '#1e1640' },
    { t: 'Architecture',     c: 'Creative',     img: '09-architecture-min',  hue: '#bdb3a4', bg: '#2a2620' },
    { t: 'Creative',         c: 'Creative',     img: '10-creative-min',      hue: '#e76b8c', bg: '#3d1622' },
    { t: 'Interior',         c: 'Creative',     img: '07-interior-min',      hue: '#c9a06a', bg: '#2e2114' },
    { t: 'Business',         c: 'Business',     img: '13-business-min',      hue: '#3a7bd5', bg: '#0e2240' },
    { t: 'Creative Green',   c: 'Creative',     img: '01-ferngreen-min',     hue: '#22C55E', bg: '#0e3a1e' },
    { t: 'Cleaning',         c: 'Business',     img: '11-cleaning-min',      hue: '#3aa9c4', bg: '#0e3340' },
    { t: 'Construction 02',  c: 'Construction', img: '23-construction-min',  hue: '#f0a93a', bg: '#3a2510' },
    { t: 'Digital Marketing',c: 'Marketing',    img: '20-digitalmarketing-min', hue: '#7c5fd8', bg: '#1e1640' },
    { t: 'SaaS Email',       c: 'Marketing',    img: '22-saas-email-marketing-min', hue: '#5b6ee5', bg: '#1e2554' },
    { t: 'Construction',     c: 'Construction', img: '16-construction-min',  hue: '#f0a93a', bg: '#3a2510' },
    { t: 'Restaurant',       c: 'Restaurant',   img: '21-restaurant-min',    hue: '#d4513b', bg: '#3d1610' },
  ];
  const filtered = active === 'All' ? items : items.filter(i => i.c === active);
  return (
    <Section id="templates">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 36 }}>
        <div>
          <Eyebrow>29 Pro · 7 Free templates</Eyebrow>
          <h2 style={{ font: '700 clamp(32px, 3.6vw, 48px)/1.1 var(--font-display)', color: 'var(--fg-1)', letterSpacing: '-.015em', margin: 0, maxWidth: 720 }}>
            Built with the Block Editor. <br/>
            <span style={{ color: 'var(--brand-green-600)' }}>Pick a starting point.</span>
          </h2>
        </div>
        <Btn variant="ghost" size="md">View all 29 →</Btn>
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
        {cats.map(c => (
          <button key={c} onClick={() => setActive(c)} style={{
            padding: '8px 16px', borderRadius: 999,
            background: active === c ? 'var(--brand-navy-800)' : '#fff',
            color: active === c ? '#fff' : 'var(--fg-2)',
            border: active === c ? 0 : '1px solid var(--line-200)',
            font: '500 13px var(--font-display)',
            cursor: 'pointer', transition: 'all .15s var(--ease-out)',
          }}>{c}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
        {filtered.map((t, i) => (
          <div key={t.t} style={{
            position: 'relative', borderRadius: 16, overflow: 'hidden',
            background: '#fff', border: '1px solid var(--line-100)',
            boxShadow: 'var(--shadow-sm)', cursor: 'pointer',
            transition: 'transform .2s var(--ease-out), box-shadow .2s var(--ease-out)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}>
            <div style={{ aspectRatio: '4/5', background: `linear-gradient(165deg, ${t.bg}, ${t.hue}cc 60%, ${t.hue})`, position: 'relative', overflow: 'hidden' }}>
              <img src={`https://wpucs.com/wp-content/uploads/2023/11/${t.img}.jpg`} alt={t.t}
                onError={e => { e.currentTarget.style.display = 'none'; }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              {/* Top-right Premium pill */}
              <span style={{
                position: 'absolute', top: 12, right: 12,
                padding: '4px 10px', borderRadius: 999,
                background: 'rgba(255,255,255,.95)', color: 'var(--brand-navy-800)',
                font: '700 10px var(--font-display)', letterSpacing: '.04em',
              }}>{i % 5 === 0 ? 'FREE' : 'PRO'}</span>
            </div>
            <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ font: '500 11px var(--font-display)', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{t.c}</div>
                <div style={{ font: '600 15px var(--font-display)', color: 'var(--fg-1)' }}>{t.t}</div>
              </div>
              <button style={{ padding: '6px 12px', borderRadius: 6, background: 'var(--brand-green-50)', color: 'var(--brand-green-700)', border: 0, font: '600 12px var(--font-display)', cursor: 'pointer' }}>Preview</button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
window.Templates = Templates;
