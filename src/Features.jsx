const Features = () => {
  const features = [
    { t: 'Gutenberg Block Editor', d: 'Customize every template using the native WordPress Block Editor — no separate page builder to learn.', icon: 'blocks' },
    { t: 'Pre-built Templates', d: '29 premium and 7 free templates across agency, business, restaurant, and more.', icon: 'grid' },
    { t: 'Drag & Drop', d: 'Rearrange any block in seconds. Style, swap, and ship.', icon: 'drag' },
    { t: 'Countdown Timer', d: 'Configurable countdown with custom design, color, and font size.', icon: 'clock' },
    { t: 'Newsletter & CSV', d: 'Capture emails and export your subscriber list to CSV anytime.', icon: 'mail' },
    { t: 'Access Control', d: 'Pick the whole site or specific pages. Add a redirect mode for selected URLs.', icon: 'lock' },
    { t: 'Mobile & SEO Friendly', d: 'Fully responsive. Configure SEO title, description, and meta directly from the dashboard.', icon: 'phone' },
    { t: 'Multi-Language', d: 'Full multilingual capabilities for global audiences. Translate every label.', icon: 'globe' },
    { t: 'Super Fast Performance', d: 'Clean code, no bloat. Loads in under 200ms on shared hosting.', icon: 'zap' },
  ];
  const Icon = ({ name }) => {
    const paths = {
      blocks: <><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>,
      grid:   <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>,
      drag:   <><circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/></>,
      clock:  <><circle cx="12" cy="12" r="10"/><path d="M12 7v5l3 2"/></>,
      mail:   <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
      lock:   <><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>,
      phone:  <><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></>,
      globe:  <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></>,
      zap:    <><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></>,
    };
    return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
  };
  return (
    <Section id="features" bg="var(--cream-100)">
      <Eyebrow>Features of UCSM</Eyebrow>
      <h2 style={{
        font: '700 clamp(32px, 3.6vw, 48px)/1.1 var(--font-display)',
        color: 'var(--fg-1)', letterSpacing: '-.015em', maxWidth: 760, margin: '0 0 56px',
      }}>Everything you need to launch <span style={{ color: 'var(--brand-green-600)' }}>before you launch.</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {features.map((f, i) => (
          <div key={f.t} style={{
            background: '#fff', borderRadius: 16, padding: 28,
            border: '1px solid var(--line-100)',
            boxShadow: 'var(--shadow-sm)',
            transition: 'transform .2s var(--ease-out), box-shadow .2s var(--ease-out)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-green)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--brand-green-50)', display: 'grid', placeItems: 'center', marginBottom: 18 }}>
              <Icon name={f.icon} />
            </div>
            <div style={{ font: '600 18px var(--font-display)', color: 'var(--fg-1)', marginBottom: 8 }}>{f.t}</div>
            <div style={{ font: '400 14px/1.6 var(--font-body)', color: 'var(--fg-2)' }}>{f.d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};
window.Features = Features;
