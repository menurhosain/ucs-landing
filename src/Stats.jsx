const Stats = () => {
  const stats = [
    { v: '1.1.3', l: 'Current Version' },
    { v: '6.8', l: 'Tested up to' },
    { v: '8,000+', l: 'Happy Users' },
    { v: '41,017+', l: 'Downloads' },
    { v: '500+', l: 'Google Fonts' },
    { v: '100%', l: 'Risk-free' },
  ];
  return (
    <Section bg="var(--bg-page)" padded={false}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 0, padding: '36px 0', borderTop: '1px solid var(--line-100)', borderBottom: '1px solid var(--line-100)' }}>
        {stats.map((s, i) => (
          <div key={s.l} style={{
            padding: '0 20px',
            borderLeft: i === 0 ? '0' : '1px solid var(--line-100)',
            textAlign: 'center',
          }}>
            <div style={{ font: '700 28px var(--font-display)', color: 'var(--fg-1)', letterSpacing: '-.01em' }}>{s.v}</div>
            <div style={{ font: '500 12px var(--font-display)', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: 4 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};
window.Stats = Stats;
