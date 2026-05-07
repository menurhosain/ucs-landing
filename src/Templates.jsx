const Templates = () => {
  const cats = ['All', 'Agency', 'Business', 'Construction', 'Creative', 'Restaurant', 'Gardening', 'Marketing', 'Slider'];
  const [active, setActive] = React.useState('All');
  const items = [
    { t: 'Launching',         c: 'Creative',     img: 'launching',     hue: '#5b6ee5', bg: '#1e2554', link: 'https://demo.wpucs.com/launching' },
    { t: 'Tour & Travels',    c: 'Business',     img: 'tour-travels',     hue: '#3aa9c4', bg: '#0e3445', link: 'https://demo.wpucs.com/tour-travels' },
    { t: 'Maintenance',       c: 'Business',     img: 'maintenance',   hue: '#22C55E', bg: '#0a3a26', link: 'https://demo.wpucs.com/maintenance' },
    { t: 'Insurance',         c: 'Business',     img: 'insurance',     hue: '#4a6cb6', bg: '#16223e', link: 'https://demo.wpucs.com/insurance' },
    { t: 'Cleaning 02',       c: 'Business',     img: 'cleaning-2',      hue: '#3ab7d8', bg: '#0d3a4a', link: 'https://demo.wpucs.com/cleaning-2' },
    { t: 'Plumbing',          c: 'Construction', img: 'plumbing',       hue: '#1e88e5', bg: '#0d2b4a', link: 'https://demo.wpucs.com/plumbing' },
    { t: 'Roofing',           c: 'Construction', img: 'roofing',       hue: '#d97a3f', bg: '#3d1f10', link: 'https://demo.wpucs.com/roofing' },
    { t: 'Handyman',          c: 'Construction', img: 'handyman',      hue: '#f0b53a', bg: '#3a2710', link: 'https://demo.wpucs.com/handyman' },
    { t: 'Creative 03',       c: 'Creative',     img: 'creative-3',       hue: '#e57aa1', bg: '#3d1525', link: 'https://demo.wpucs.com/creative-3' },
    { t: 'Gardening',         c: 'Gardening',    img: 'gardening',        hue: '#5fae5e', bg: '#143b1e', link: 'https://demo.wpucs.com/gardening' },
    { t: 'Digital Agency',    c: 'Agency',       img: 'digital-agency', hue: '#7c5fd8', bg: '#1e1640', link: 'https://demo.wpucs.com/digital-agency' },
    { t: 'Architecture',      c: 'Creative',     img: 'architecture',  hue: '#bdb3a4', bg: '#2a2620', link: 'https://demo.wpucs.com/architecture' },
    { t: 'Creative business', c: 'Creative',     img: 'creative-business',      hue: '#e76b8c', bg: '#3d1622', link: 'https://demo.wpucs.com/creative-business' },
    { t: 'Interior',          c: 'Creative',     img: 'interior',      hue: '#c9a06a', bg: '#2e2114', link: 'https://demo.wpucs.com/interior' },
    { t: 'Business',          c: 'Business',     img: 'business',      hue: '#3a7bd5', bg: '#0e2240', link: 'https://demo.wpucs.com/business' },
    { t: 'Creative Green',    c: 'Creative',     img: 'creative-green',     hue: '#22C55E', bg: '#0e3a1e', link: 'https://demo.wpucs.com/creative-green' },
    { t: 'Cleaning',          c: 'Business',     img: 'cleaning',      hue: '#3aa9c4', bg: '#0e3340', link: 'https://demo.wpucs.com/cleaning' },
    { t: 'Construction 02',   c: 'Construction', img: 'construction-2',  hue: '#f0a93a', bg: '#3a2510', link: 'https://demo.wpucs.com/construction-2' },
    { t: 'Digital Marketing', c: 'Marketing',    img: 'digital-marketing', hue: '#7c5fd8', bg: '#1e1640', link: 'https://demo.wpucs.com/digital-marketing' },
    { t: 'SaaS Email',        c: 'Marketing',    img: 'saas-email-marketing', hue: '#5b6ee5', bg: '#1e2554', link: 'https://demo.wpucs.com/saas-email-marketing' },
    { t: 'Construction',      c: 'Construction', img: 'construction',  hue: '#f0a93a', bg: '#3a2510', link: 'https://demo.wpucs.com/construction' },
    { t: 'Restaurant',        c: 'Restaurant',   img: 'restaurant',    hue: '#d4513b', bg: '#3d1610', link: 'https://demo.wpucs.com/restaurant' },
    { t: 'Creative 02',       c: 'Creative',     img: 'creative-2',    hue: '#22C55E', bg: '#0a3a26', link: 'https://demo.wpucs.com/creative-2' },
    { t: 'Default',           c: 'Agency',       img: 'default',    hue: '#3a7bd5', bg: '#0e2240', link: 'https://demo.wpucs.com/default' },
    { t: 'Maintenance 02',    c: 'Business',     img: 'maintenance-2',   hue: '#4a6cb6', bg: '#16223e', link: 'https://demo.wpucs.com/maintenance-2' },
    { t: 'Maintenance 03',    c: 'Business',     img: 'maintenance-3',   hue: '#5fae5e', bg: '#143b1e', link: 'https://demo.wpucs.com/maintenance-3-3' },
    { t: 'Maintenance 04',    c: 'Business',     img: 'maintenance-4',   hue: '#e57aa1', bg: '#3d1525', link: 'https://demo.wpucs.com/maintenance-4' },
    { t: 'Under Construction',c: 'Construction', img: 'underconstruction',   hue: '#22C55E', bg: '#0a3a26', link: 'https://demo.wpucs.com/under-construction' },
    { t: 'Under Construction 02',c: 'Construction', img: 'underconstruction-2',   hue: '#f0a93a', bg: '#3a2510', link: 'https://demo.wpucs.com/under-construction-2' },
  ];
  const filtered = active === 'All' ? items : items.filter(i => i.c === active);
  return (
    <Section id="templates">
      <div className="tmpl-header">
        <div>
          <Eyebrow>30 Pro · 7 Free templates</Eyebrow>
          <h2 className="tmpl-h2">
            Built with the Block Editor. <br/>
            <span className="tmpl-h2-accent">Pick a starting point.</span>
          </h2>
        </div>
        <Btn target="_blank" href="https://demo.wpucs.com/" variant="ghost" size="md">View all <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></Btn>
      </div>

      <div className="tmpl-filters">
        {cats.map(c => (
          <button key={c} onClick={() => setActive(c)} className="tmpl-filter-btn" style={{
            background: active === c ? 'var(--brand-accent-500)' : '#fff',
            color: active === c ? '#fff' : 'var(--fg-2)',
            border: active === c ? 0 : '1px solid var(--line-200)',
          }}>{c}</button>
        ))}
      </div>

      <div className="tmpl-grid">
        {filtered.map((t, i) => (
          <div key={t.t} className="tmpl-card"
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}>
            <div className="tmpl-img-wrap" style={{ background: `linear-gradient(165deg, ${t.bg}, ${t.hue}cc 60%, ${t.hue})` }}>
              <a target="_blank" href={t.link}>
                <img src={`image/preview/${t.img}.jpg`} alt={t.t}
                  onError={e => { e.currentTarget.style.display = 'none'; }}
                  className="tmpl-img"/>
              </a>
              <span className="tmpl-badge">{i % 5 === 0 ? 'FREE' : 'PRO'}</span>
            </div>
            <div className="tmpl-footer">
              <div>
                <div className="tmpl-cat">{t.c}</div>
                <div className="tmpl-name"><a target="_blank" href={t.link}>{t.t}</a></div>
              </div>
              <a target="_blank" href={t.link} className="tmpl-preview-btn">Preview</a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
window.Templates = Templates;
