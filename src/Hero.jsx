const Hero = () => (
  <Section padded>
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center' }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'var(--brand-green-50)', color: 'var(--brand-green-700)', font: '600 12px var(--font-display)', letterSpacing: '.04em', marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: 'var(--brand-green-500)' }}></span>
            NEW · GUTENBERG BLOCK EDITOR SUPPORT
          </div>
          <h1 style={{
            font: '800 clamp(40px, 5.4vw, 68px)/1.05 var(--font-display)',
            color: 'var(--fg-1)',
            letterSpacing: '-.02em',
            margin: '0 0 20px',
            textWrap: 'balance',
          }}>
            Coming Soon &amp; <br/>
            Maintenance Mode <br/>
            <span style={{ color: 'var(--brand-green-600)' }}>Builder</span> for WordPress
          </h1>
          <p style={{
            font: '400 19px/1.6 var(--font-body)',
            color: 'var(--fg-2)', maxWidth: 540, margin: '0 0 32px',
          }}>
            Hide your website until it's ready. Build an eye-catching page with the Block Editor — drag, drop, customize, and launch in minutes. No coding skills needed.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <Btn variant="primary" size="lg">Free Download</Btn>
            <Btn variant="ghost" size="lg">View Demos →</Btn>
          </div>
          <div style={{ display: 'flex', gap: 28, marginTop: 32, color: 'var(--fg-3)', font: '500 13px var(--font-body)' }}>
            <span><b style={{ color: 'var(--fg-1)', fontWeight: 700 }}>8,000+</b> happy users</span>
            <span><b style={{ color: 'var(--fg-1)', fontWeight: 700 }}>41,017+</b> downloads</span>
            <span style={{ color: 'var(--brand-green-700)' }}><b>★★★★★</b> 4.9 rated</span>
          </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{
          background: '#fff', borderRadius: 20, padding: 14,
          boxShadow: '0 32px 80px -24px rgba(11,27,58,.20), 0 12px 32px -10px rgba(34,197,94,.18)',
          border: '1px solid var(--line-100)',
        }}>
          {/* Browser chrome */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 4px 12px' }}>
            <span style={{ width: 10, height: 10, borderRadius: 99, background: '#FF5F57' }}/>
            <span style={{ width: 10, height: 10, borderRadius: 99, background: '#FEBC2E' }}/>
            <span style={{ width: 10, height: 10, borderRadius: 99, background: '#28C840' }}/>
            <span style={{ marginLeft: 12, padding: '4px 10px', borderRadius: 6, background: 'var(--gray-100)', font: '500 11px var(--font-mono)', color: 'var(--fg-3)' }}>wp-admin/admin.php?page=wpucs-builder</span>
          </div>
          {/* Mock dashboard */}
          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--line-100)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', minHeight: 360 }}>
              <aside style={{ background: 'var(--brand-navy-800)', padding: 16, color: '#fff' }}>
                <div style={{ font: '700 13px var(--font-display)', marginBottom: 18, opacity: .9 }}>WPUCS</div>
                {['Dashboard', 'Templates', 'Design', 'Countdown', 'SEO', 'Newsletter'].map((l, i) => (
                  <div key={l} style={{
                    padding: '8px 10px', borderRadius: 6, marginBottom: 4,
                    background: i === 1 ? 'rgba(34,197,94,.18)' : 'transparent',
                    color: i === 1 ? 'var(--brand-green-300)' : 'rgba(255,255,255,.7)',
                    font: '500 12px var(--font-display)',
                  }}>{l}</div>
                ))}
              </aside>
              <div style={{ padding: 18, background: 'var(--cream-50)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14, alignItems: 'center' }}>
                  <div style={{ font: '700 16px var(--font-display)', color: 'var(--fg-1)' }}>Choose a template</div>
                  <Pill tone="new">29 Pro</Pill>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                  {['#7AAE63','#D9A75A','#5FA9C4','#A88AC9','#E08263','#6CC2A3'].map((c, i) => (
                    <div key={i} style={{ aspectRatio: '4/5', borderRadius: 8, background: `linear-gradient(160deg, ${c}, ${c}cc)`, border: i === 0 ? '2px solid var(--brand-green-500)' : '1px solid var(--line-100)', position: 'relative' }}>
                      {i === 0 && <span style={{ position: 'absolute', top: 6, right: 6, padding: '2px 6px', borderRadius: 4, background: 'var(--brand-green-500)', color: '#fff', font: '700 9px var(--font-display)' }}>ACTIVE</span>}
                    </div>
                  ))}
                </div>
                <button style={{ marginTop: 14, padding: '10px 18px', borderRadius: 8, background: 'var(--brand-green-500)', color: '#fff', border: 0, font: '600 13px var(--font-display)' }}>Customize in Block Editor →</button>
              </div>
            </div>
          </div>
        </div>
        {/* Floating mini badge */}
        <div style={{
          position: 'absolute', bottom: -16, left: -20,
          background: '#fff', borderRadius: 14, padding: '10px 14px',
          boxShadow: 'var(--shadow-lg)', border: '1px solid var(--line-100)',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--brand-green-50)', display: 'grid', placeItems: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </div>
          <div>
            <div style={{ font: '700 13px var(--font-display)', color: 'var(--fg-1)' }}>Live in 90s</div>
            <div style={{ font: '400 11px var(--font-body)', color: 'var(--fg-3)' }}>Install → Customize → Launch</div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
window.Hero = Hero;
