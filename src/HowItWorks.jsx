const HowItWorks = () => {
  const steps = [
    { n: '01', t: 'Install the plugin', d: 'Free version on WordPress.org or upload the Pro .zip. One click activates the dashboard.' },
    { n: '02', t: 'Pick a template & customize', d: '29 demo templates open directly in the Block Editor. Edit copy, swap images, set colors — no code.' },
    { n: '03', t: 'Toggle live & launch', d: 'Choose Coming Soon, Maintenance, Under Construction, or Redirect Mode. Publish in one click.' },
  ];
  return (
    <Section bg="var(--bg-page)">
      <div className="hiw-header">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="hiw-h2">Three steps. About 90 seconds.</h2>
      </div>
      <div className="hiw-steps">
        {steps.map(s => (
          <div key={s.n} className="hiw-step">
            <div className="hiw-step-num">{s.n}</div>
            <div className="hiw-step-title">{s.t}</div>
            <div className="hiw-step-desc">{s.d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const UseCases = () => {
  const cases = [
    { t: 'Pre-launch sites', d: 'Capture early-bird emails before launch day.', tone: 'var(--brand-accent-500)' },
    { t: 'Maintenance mode', d: 'Keep visitors informed during upgrades.', tone: 'var(--brand-yellow-500)' },
    { t: 'Product launches', d: 'Build hype with countdowns and reveal pages.', tone: 'var(--brand-navy-800)' },
  ];
  return (
    <Section bg="var(--cream-100)">
      <div className="ucs-grid">
        <div>
          <Eyebrow>Use cases</Eyebrow>
          <h2 className="ucs-h2">Designed for the moments your site isn't ready yet.</h2>
        </div>
        <div className="ucs-cases">
          {cases.map(c => (
            <div key={c.t} className="ucs-case" style={{ borderTop: `4px solid ${c.tone}` }}>
              <div className="ucs-case-title">{c.t}</div>
              <div className="ucs-case-desc">{c.d}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const MidCTA = () => (
  <Section bg="var(--brand-navy-900)">
    <div className="mcta-grid">
      <div>
        <Eyebrow color="var(--brand-accent-300)">Get started now</Eyebrow>
        <h2 className="mcta-h2">
          Start using a great <br/>
          <span className="mcta-h2-accent">Maintenance Mode plugin.</span>
        </h2>
        <p className="mcta-p">Create &amp; publish pages, track conversions, and start collecting leads in minutes.</p>
      </div>
      <div className="mcta-actions">
        <Btn variant="primary" size="lg">Free Download</Btn>
        <Btn size="lg" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.25)' }}>See pricing →</Btn>
      </div>
    </div>
  </Section>
);

window.HowItWorks = HowItWorks;
window.UseCases = UseCases;
window.MidCTA = MidCTA;
