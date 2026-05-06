const Hero = () => (
  <Section padded>
    <div className="hero-grid">
      <div>
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          NEW · GUTENBERG BLOCK EDITOR SUPPORT
        </div>
        <h1 className="hero-h1">
          Coming Soon &amp; <br/>
          Maintenance Mode <br/>
          <span className="hero-h1-accent">Builder</span> for WordPress
        </h1>
        <p className="hero-lead">
          Hide your website until it's ready. Build an eye-catching page with the Block Editor — drag, drop, customize, and launch in minutes. No coding skills needed.
        </p>
        <div className="hero-cta-row">
          <Btn variant="primary" size="lg">Free Download</Btn>
          <Btn variant="ghost" size="lg">View Demos →</Btn>
        </div>
        <div className="hero-social-proof">
          <span><b className="hero-stat-num">8,000+</b> happy users</span>
          <span><b className="hero-stat-num">41,017+</b> downloads</span>
          <span className="hero-rating"><b>★★★★★</b> 4.9 rated</span>
        </div>
      </div>
      <div className="hero-preview-wrap">
        <div className="hero-browser-card">
          {/* Browser chrome */}
          <div className="hero-chrome">
            <span className="hero-dot hero-dot--red"/>
            <span className="hero-dot hero-dot--yellow"/>
            <span className="hero-dot hero-dot--green"/>
            <span className="hero-address-bar">wp-admin/admin.php?page=wpucs-builder</span>
          </div>
          {/* Mock dashboard */}
          <div className="hero-dashboard-wrap">
            <div className="hero-dashboard-grid">
              <aside className="hero-sidebar">
                <div className="hero-sidebar-title">WPUCS</div>
                {['Dashboard', 'Templates', 'Design', 'Countdown', 'SEO', 'Newsletter'].map((l, i) => (
                  <div key={l} className="hero-sidebar-item" style={{
                    background: i === 1 ? 'rgba(34,197,94,.18)' : 'transparent',
                    color: i === 1 ? 'var(--brand-green-300)' : 'rgba(255,255,255,.7)',
                  }}>{l}</div>
                ))}
              </aside>
              <div className="hero-dashboard-content">
                <div className="hero-template-header">
                  <div className="hero-template-title">Choose a template</div>
                  <Pill tone="new">29 Pro</Pill>
                </div>
                <div className="hero-template-grid">
                  {['#7AAE63','#D9A75A','#5FA9C4','#A88AC9','#E08263','#6CC2A3'].map((c, i) => (
                    <div key={i} className="hero-tmpl-item" style={{
                      background: `linear-gradient(160deg, ${c}, ${c}cc)`,
                      border: i === 0 ? '2px solid var(--brand-green-500)' : '1px solid var(--line-100)',
                    }}>
                      {i === 0 && <span className="hero-active-badge">ACTIVE</span>}
                    </div>
                  ))}
                </div>
                <button className="hero-customize-btn">Customize in Block Editor →</button>
              </div>
            </div>
          </div>
        </div>
        {/* Floating mini badge */}
        <div className="hero-float-badge">
          <div className="hero-float-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </div>
          <div>
            <div className="hero-float-title">Live in 90s</div>
            <div className="hero-float-sub">Install → Customize → Launch</div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
window.Hero = Hero;
