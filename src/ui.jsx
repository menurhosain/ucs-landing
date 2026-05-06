// WPUCS Marketing — shared atoms & app shell
const { useState } = React;

const Btn = ({ children, variant = 'primary', size = 'md', onClick, style, ...rest }) => {
  const sizes = {
    sm: { padding: '8px 14px', fontSize: 13 },
    md: { padding: '14px 26px', fontSize: 15 },
    lg: { padding: '18px 34px', fontSize: 16 },
  };
  const variants = {
    primary: { background: 'var(--brand-accent-500)', color: '#fff', boxShadow: '0 8px 22px -8px rgba(81, 61, 232, 0.55)' },
    dark:    { background: 'var(--brand-navy-800)', color: '#fff' },
    ghost:   { background: 'transparent', color: 'var(--fg-1)', border: '1px solid var(--line-200)' },
    link:    { background: 'transparent', color: 'var(--brand-accent-700)', padding: '6px 0' },
  };
  return (
    <button onClick={onClick}
      className="ui-btn"
      style={{ ...sizes[size], ...variants[variant], ...style }}
      onMouseDown={e => e.currentTarget.style.transform = 'scale(.98)'}
      onMouseUp={e => e.currentTarget.style.transform = ''}
      onMouseLeave={e => e.currentTarget.style.transform = ''}
      {...rest}>
      {children}
    </button>
  );
};

const Pill = ({ children, tone = 'free' }) => {
  const tones = {
    free:    { background: 'var(--brand-accent-50)', color: 'var(--brand-accent-700)' },
    premium: { background: 'var(--brand-navy-800)', color: '#fff' },
    new:     { background: 'var(--brand-yellow-500)', color: 'var(--brand-navy-800)' },
    save:    { background: '#FFE6E7', color: '#9F1F23' },
  };
  return (
    <span className="ui-pill" style={{ ...tones[tone] }}>{children}</span>
  );
};

const Eyebrow = ({ children, color = 'var(--brand-accent-600)' }) => (
  <div className="ui-eyebrow" style={{ color }}>{children}</div>
);

const Section = ({ children, bg = 'var(--bg-page)', id, padded = true }) => (
  <section id={id} style={{
    background: bg,
    padding: padded ? 'clamp(64px, 9vw, 120px) 24px' : 0,
  }}>
    <div className="ui-section-inner">{children}</div>
  </section>
);

const Logo = ({ dark }) => (
  <div className="ui-logo">
    <div className="ui-logo-icon">W</div>
    <div className="ui-logo-text" style={{ color: dark ? '#fff' : 'var(--fg-1)' }}>
      WPUCS<span className="ui-logo-dot">.</span>
    </div>
  </div>
);

Object.assign(window, { Btn, Pill, Eyebrow, Section, Logo });
