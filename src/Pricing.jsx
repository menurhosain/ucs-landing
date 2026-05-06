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
      <div className="prc-header">
        <Eyebrow>Premium pricing plans</Eyebrow>
        <h2 className="prc-h2">Pay once, build many.</h2>
        <p className="prc-sub">Coming Soon Pro comparison table — what you'll get with Pro!</p>

        <div className="prc-toggle">
          {[['yearly','Yearly'], ['lifetime','Lifetime · Best Bundle']].map(([k, l]) => (
            <button key={k} onClick={() => setBilling(k)} className="prc-toggle-btn" style={{
              background: billing === k ? '#fff' : 'transparent',
              color: billing === k ? 'var(--fg-1)' : 'var(--fg-3)',
              boxShadow: billing === k ? 'var(--shadow-sm)' : 'none',
            }}>{l}</button>
          ))}
        </div>
      </div>

      <div className="prc-grid">
        {tiers[billing].map(t => (
          <div key={t.name} className="prc-card" style={{
            background: t.pop ? 'var(--brand-navy-800)' : '#fff',
            color: t.pop ? '#fff' : 'var(--fg-1)',
            border: t.pop ? 0 : '1px solid var(--line-100)',
            boxShadow: t.pop ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
            transform: t.pop ? 'translateY(-8px)' : 'none',
          }}>
            {t.pop && <span className="prc-popular-badge">★ Most popular</span>}
            <div className="prc-plan-name" style={{ color: t.pop ? 'var(--brand-green-300)' : 'var(--fg-3)' }}>{t.name}</div>
            <div className="prc-price-row">
              <span className="prc-was-price" style={{ color: t.pop ? 'rgba(255,255,255,.4)' : 'var(--fg-4)' }}>{t.was}</span>
              <span className="prc-price">{t.price}</span>
              <span className="prc-period" style={{ color: t.pop ? 'rgba(255,255,255,.6)' : 'var(--fg-3)' }}>/ {billing === 'yearly' ? 'yr' : 'once'}</span>
            </div>
            <div className="prc-save" style={{
              background: t.pop ? 'rgba(34,197,94,.18)' : '#FFE6E7',
              color: t.pop ? 'var(--brand-green-300)' : '#9F1F23',
            }}>Save {t.save}</div>
            <div className="prc-sites">Install on {t.sites}</div>
            <div className="prc-features">
              {features.map(f => (
                <div key={f} className="prc-feature" style={{ color: t.pop ? 'rgba(255,255,255,.85)' : 'var(--fg-2)' }}>
                  <span className="prc-check" style={{ color: t.pop ? 'var(--brand-green-300)' : 'var(--brand-green-500)' }}>✓</span>
                  {f}
                </div>
              ))}
            </div>
            <button className="prc-cta-btn" style={{ background: t.pop ? 'var(--brand-green-500)' : 'var(--fg-1)' }}>Get License</button>
          </div>
        ))}
      </div>

      <div className="prc-guarantee">
        <div className="prc-guarantee-inner">
          <div className="prc-guarantee-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <div>
            <div className="prc-guarantee-title">100% No-Risk · 14-Day Money-Back Guarantee</div>
            <div className="prc-guarantee-desc">If WPUCS isn't the best fit, reach out — we'll happily refund 100% of your money.</div>
          </div>
        </div>
        <Btn variant="primary" size="md">Free Download</Btn>
      </div>
    </Section>
  );
};
window.Pricing = Pricing;
