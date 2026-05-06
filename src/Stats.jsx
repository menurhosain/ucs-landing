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
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={s.l} className="stats-item" style={{
            borderLeft: i === 0 ? '0' : '1px solid var(--line-100)',
          }}>
            <div className="stats-value">{s.v}</div>
            <div className="stats-label">{s.l}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};
window.Stats = Stats;
