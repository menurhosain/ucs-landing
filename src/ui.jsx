// WPUCS Marketing — shared atoms & app shell
const { useState } = React;

const Btn = ({ children, variant = 'primary', size = 'md', onClick, style, ...rest }) => {
  const sizes = {
    sm: { padding: '8px 14px', fontSize: 13 },
    md: { padding: '14px 26px', fontSize: 15 },
    lg: { padding: '18px 34px', fontSize: 16 },
  };
  const variants = {
    primary: { background: 'var(--brand-green-500)', color: '#fff', boxShadow: '0 8px 22px -8px rgba(34,197,94,.55)' },
    dark:    { background: 'var(--brand-navy-800)', color: '#fff' },
    ghost:   { background: 'transparent', color: 'var(--fg-1)', border: '1px solid var(--line-200)' },
    link:    { background: 'transparent', color: 'var(--brand-green-700)', padding: '6px 0' },
  };
  return (
    <button onClick={onClick}
      style={{
        border: 0, borderRadius: 8, cursor: 'pointer',
        fontFamily: 'var(--font-display)', fontWeight: 600,
        transition: 'transform .15s var(--ease-out), background .15s var(--ease-out)',
        ...sizes[size], ...variants[variant], ...style,
      }}
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
    free:    { background: 'var(--brand-green-50)', color: 'var(--brand-green-700)' },
    premium: { background: 'var(--brand-navy-800)', color: '#fff' },
    new:     { background: 'var(--brand-yellow-500)', color: 'var(--brand-navy-800)' },
    save:    { background: '#FFE6E7', color: '#9F1F23' },
  };
  return (
    <span style={{
      padding: '4px 10px', borderRadius: 999,
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11,
      ...tones[tone],
    }}>{children}</span>
  );
};

const Eyebrow = ({ children, color = 'var(--brand-green-600)' }) => (
  <div style={{
    font: '600 13px var(--font-display)',
    color, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 12,
  }}>{children}</div>
);

const Section = ({ children, bg = 'var(--bg-page)', id, padded = true }) => (
  <section id={id} style={{
    background: bg,
    padding: padded ? 'clamp(64px, 9vw, 120px) 24px' : 0,
  }}>
    <div style={{ maxWidth: 1240, margin: '0 auto' }}>{children}</div>
  </section>
);

const Logo = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <div style={{
      width: 36, height: 36, borderRadius: 10,
      background: 'var(--brand-green-500)',
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      font: '800 18px var(--font-display)',
    }}>W</div>
    <div style={{
      font: '800 20px var(--font-display)',
      letterSpacing: '-.01em',
      color: dark ? '#fff' : 'var(--fg-1)',
    }}>WPUCS<span style={{ color: 'var(--brand-green-500)' }}>.</span></div>
  </div>
);

Object.assign(window, { Btn, Pill, Eyebrow, Section, Logo });
