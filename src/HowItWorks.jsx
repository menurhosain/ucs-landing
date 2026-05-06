const HowItWorks = () => {
  const steps = [
    { n: '01', t: 'Install the plugin', d: 'Free version on WordPress.org or upload the Pro .zip. One click activates the dashboard.' },
    { n: '02', t: 'Pick a template & customize', d: '29 demo templates open directly in the Block Editor. Edit copy, swap images, set colors — no code.' },
    { n: '03', t: 'Toggle live & launch', d: 'Choose Coming Soon, Maintenance, Under Construction, or Redirect Mode. Publish in one click.' },
  ];
  return (
    <Section bg="var(--bg-page)">
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Eyebrow>How it works</Eyebrow>
        <h2 style={{ font: '700 clamp(32px, 3.6vw, 48px)/1.1 var(--font-display)', color: 'var(--fg-1)', letterSpacing: '-.015em', margin: 0 }}>Three steps. About 90 seconds.</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, position: 'relative' }}>
        {steps.map(s => (
          <div key={s.n} style={{ background: '#fff', border: '1px solid var(--line-100)', borderRadius: 20, padding: 32, boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ font: '800 56px var(--font-display)', color: 'var(--brand-green-500)', letterSpacing: '-.02em', lineHeight: 1, marginBottom: 18 }}>{s.n}</div>
            <div style={{ font: '700 22px var(--font-display)', color: 'var(--fg-1)', marginBottom: 8 }}>{s.t}</div>
            <div style={{ font: '400 15px/1.6 var(--font-body)', color: 'var(--fg-2)' }}>{s.d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const UseCases = () => {
  const cases = [
    { t: 'Pre-launch sites', d: 'Capture early-bird emails before launch day.', tone: 'var(--brand-green-500)' },
    { t: 'Maintenance mode', d: 'Keep visitors informed during upgrades.', tone: 'var(--brand-yellow-500)' },
    { t: 'Product launches', d: 'Build hype with countdowns and reveal pages.', tone: 'var(--brand-navy-800)' },
  ];
  return (
    <Section bg="var(--cream-100)">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Eyebrow>Use cases</Eyebrow>
          <h2 style={{ font: '700 clamp(32px, 3.4vw, 44px)/1.12 var(--font-display)', color: 'var(--fg-1)', letterSpacing: '-.01em', margin: 0 }}>Designed for the moments your site isn't ready yet.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {cases.map(c => (
            <div key={c.t} style={{ background: '#fff', borderRadius: 16, padding: 24, borderTop: `4px solid ${c.tone}`, boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ font: '700 18px var(--font-display)', color: 'var(--fg-1)', marginBottom: 6 }}>{c.t}</div>
              <div style={{ font: '400 14px/1.55 var(--font-body)', color: 'var(--fg-2)' }}>{c.d}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const MidCTA = () => (
  <Section bg="var(--brand-navy-900)">
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', alignItems: 'center', gap: 40 }}>
      <div>
        <Eyebrow color="var(--brand-green-300)">Get started now</Eyebrow>
        <h2 style={{ font: '800 clamp(32px, 3.6vw, 48px)/1.08 var(--font-display)', color: '#fff', letterSpacing: '-.015em', margin: '0 0 14px' }}>
          Start using a great <br/>
          <span style={{ color: 'var(--brand-green-300)' }}>Maintenance Mode plugin.</span>
        </h2>
        <p style={{ font: '400 17px/1.6 var(--font-body)', color: 'rgba(255,255,255,.72)', maxWidth: 540, margin: 0 }}>Create &amp; publish pages, track conversions, and start collecting leads in minutes.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Btn variant="primary" size="lg">Free Download</Btn>
        <Btn size="lg" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.25)' }}>See pricing →</Btn>
      </div>
    </div>
  </Section>
);

window.HowItWorks = HowItWorks;
window.UseCases = UseCases;
window.MidCTA = MidCTA;
