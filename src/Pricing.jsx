const Pricing = () => {
  const [billing, setBilling] = React.useState('lifetime');
  const tiers = {
    yearly: [
      { name: 'Personal',    price: '$19', was: '$29',  save: '52%', sites: '1 site',    pop: false },
      { name: 'Team',        price: '$29', was: '$59',  save: '60%', sites: '5 sites',   pop: true  },
      { name: 'Developer',   price: '$59', was: '$99',  save: '55%', sites: '10 sites',  pop: false },
      { name: 'Agency',      price: '$79', was: '$139', save: '43%', sites: '50 sites',  pop: false },
    ],
    lifetime: [
      { name: 'Personal',    price: '$29',  was: '$39',  save: '34%', sites: '1 site',    pop: false },
      { name: 'Team',        price: '$39',  was: '$99',  save: '70%', sites: '5 sites',   pop: true  },
      { name: 'Developer',   price: '$59',  was: '$159', save: '75%', sites: '50 sites',  pop: false },
      { name: 'Agency',      price: '$99',  was: '$199', save: '50%', sites: '100 sites', pop: false },
    ],
  };
  const features = [
    'All current & future plugin features',
    '29 Pro Gutenberg templates',
    '30-day money-back guarantee',
    billing === 'yearly' ? '1 year updates & support' : 'Lifetime updates & support',
    billing === 'yearly' ? 'Pay for as long as you use' : 'One-time payment',
  ];
  return (
    <Section id="pricing">
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <Eyebrow>Premium pricing plans</Eyebrow>
        <h2 style={{ font: '700 clamp(32px, 3.6vw, 48px)/1.1 var(--font-display)', color: 'var(--fg-1)', letterSpacing: '-.015em', margin: '0 0 12px' }}>Pay once, build many.</h2>
        <p style={{ font: '400 16px/1.6 var(--font-body)', color: 'var(--fg-2)', maxWidth: 560, margin: '0 auto' }}>Coming Soon Pro comparison table — what you'll get with Pro!</p>

        <div style={{ display: 'inline-flex', background: 'var(--cream-100)', border: '1px solid var(--line-100)', borderRadius: 999, padding: 4, marginTop: 28 }}>
          {[['yearly','Yearly'], ['lifetime','Lifetime · Best Bundle']].map(([k, l]) => (
            <button key={k} onClick={() => setBilling(k)} style={{
              padding: '10px 22px', borderRadius: 999,
              background: billing === k ? '#fff' : 'transparent',
              border: 0, font: '600 14px var(--font-display)',
              color: billing === k ? 'var(--fg-1)' : 'var(--fg-3)',
              boxShadow: billing === k ? 'var(--shadow-sm)' : 'none',
              cursor: 'pointer',
            }}>{l}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
        {tiers[billing].map(t => (
          <div key={t.name} style={{
            background: t.pop ? 'var(--brand-navy-800)' : '#fff',
            color: t.pop ? '#fff' : 'var(--fg-1)',
            borderRadius: 20, padding: 28,
            border: t.pop ? 0 : '1px solid var(--line-100)',
            boxShadow: t.pop ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
            position: 'relative',
            transform: t.pop ? 'translateY(-8px)' : 'none',
          }}>
            {t.pop && <span style={{ position: 'absolute', top: -10, right: 18, padding: '4px 12px', borderRadius: 999, background: 'var(--brand-yellow-500)', color: 'var(--brand-navy-800)', font: '700 11px var(--font-display)' }}>★ Most popular</span>}
            <div style={{ font: '600 13px var(--font-display)', color: t.pop ? 'var(--brand-green-300)' : 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 12 }}>{t.name}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
              <span style={{ textDecoration: 'line-through', color: t.pop ? 'rgba(255,255,255,.4)' : 'var(--fg-4)', font: '500 16px var(--font-body)' }}>{t.was}</span>
              <span style={{ font: '700 42px var(--font-display)', letterSpacing: '-.015em' }}>{t.price}</span>
              <span style={{ color: t.pop ? 'rgba(255,255,255,.6)' : 'var(--fg-3)', font: '500 13px var(--font-body)' }}>/ {billing === 'yearly' ? 'yr' : 'once'}</span>
            </div>
            <div style={{ display: 'inline-flex', padding: '3px 10px', borderRadius: 999, background: t.pop ? 'rgba(34,197,94,.18)' : '#FFE6E7', color: t.pop ? 'var(--brand-green-300)' : '#9F1F23', font: '700 11px var(--font-display)', marginBottom: 18 }}>Save {t.save}</div>
            <div style={{ font: '600 14px var(--font-display)', marginBottom: 14 }}>Install on {t.sites}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
              {features.map(f => (
                <div key={f} style={{ display: 'flex', gap: 10, font: '400 13px/1.5 var(--font-body)', color: t.pop ? 'rgba(255,255,255,.85)' : 'var(--fg-2)' }}>
                  <span style={{ color: t.pop ? 'var(--brand-green-300)' : 'var(--brand-green-500)', fontWeight: 700 }}>✓</span>
                  {f}
                </div>
              ))}
            </div>
            <button style={{
              width: '100%', padding: '13px', borderRadius: 8, border: 0,
              background: t.pop ? 'var(--brand-green-500)' : 'var(--fg-1)',
              color: '#fff', font: '600 14px var(--font-display)', cursor: 'pointer',
            }}>Get License</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 56, padding: 32, background: 'var(--brand-green-50)', borderRadius: 20, display: 'flex', gap: 24, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <div style={{ width: 52, height: 52, borderRadius: 999, background: '#fff', display: 'grid', placeItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <div>
            <div style={{ font: '700 18px var(--font-display)', color: 'var(--fg-1)' }}>100% No-Risk · 14-Day Money-Back Guarantee</div>
            <div style={{ font: '400 14px var(--font-body)', color: 'var(--fg-2)' }}>If WPUCS isn't the best fit, reach out — we'll happily refund 100% of your money.</div>
          </div>
        </div>
        <Btn variant="primary" size="md">Free Download</Btn>
      </div>
    </Section>
  );
};
window.Pricing = Pricing;
