const Footer = () => (
  <footer style={{ background: 'var(--brand-navy-900)', color: '#fff', padding: '64px 24px 32px' }}>
    <div style={{ maxWidth: 1240, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,.08)' }}>
        <div style={{ maxWidth: 360 }}>
          <Logo dark/>
          <p style={{ font: '400 14px/1.6 var(--font-body)', color: 'rgba(255,255,255,.65)', marginTop: 16 }}>
            WPUCS is part of <span style={{ color: 'var(--brand-green-300)' }}>RSTheme</span>, makers of 100+ premium WordPress themes and plugins, trusted by 150,000+ customers worldwide.
          </p>
        </div>
        <div>
          <div style={{ font: '600 13px var(--font-display)', textTransform: 'uppercase', letterSpacing: '.08em', color: 'rgba(255,255,255,.5)', marginBottom: 14 }}>Product</div>
          {['Templates', 'Features', 'Pricing', 'Changelog'].map(l => (
            <a key={l} href="#" style={{ display: 'block', font: '400 14px var(--font-body)', color: 'rgba(255,255,255,.85)', marginBottom: 8, textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
        <div>
          <div style={{ font: '600 13px var(--font-display)', textTransform: 'uppercase', letterSpacing: '.08em', color: 'rgba(255,255,255,.5)', marginBottom: 14 }}>Resources</div>
          {['Documentation', 'Support', 'Blog', 'Refund Policy'].map(l => (
            <a key={l} href="#" style={{ display: 'block', font: '400 14px var(--font-body)', color: 'rgba(255,255,255,.85)', marginBottom: 8, textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
        <div>
          <div style={{ font: '600 13px var(--font-display)', textTransform: 'uppercase', letterSpacing: '.08em', color: 'rgba(255,255,255,.5)', marginBottom: 14 }}>Company</div>
          {['About RSTheme', 'Contact', 'Terms', 'Privacy'].map(l => (
            <a key={l} href="#" style={{ display: 'block', font: '400 14px var(--font-body)', color: 'rgba(255,255,255,.85)', marginBottom: 8, textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 24, font: '400 13px var(--font-body)', color: 'rgba(255,255,255,.5)' }}>
        <div>© 2026 RSTheme · All Rights Reserved.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span>Secure payment</span>
          {['Visa', 'PayPal', 'Amex', 'Stripe'].map(p => (
            <span key={p} style={{ padding: '4px 10px', borderRadius: 6, background: 'rgba(255,255,255,.06)', font: '600 11px var(--font-display)', color: 'rgba(255,255,255,.7)' }}>{p}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
window.Footer = Footer;
