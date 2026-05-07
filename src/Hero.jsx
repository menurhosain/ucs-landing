const Hero = () => (
  <Section padded>
    <div className="hero-grid">
      <div className="hero-leftbar">
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
          <Btn target="_blank" href="https://wordpress.org/plugins/ultimate-coming-soon/" variant="primary" size="lg">Free Download</Btn>
          <Btn href="#templates" variant="ghost" size="lg">View Demos <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></Btn>
        </div>
        <div className="hero-social-proof">
          <span><b className="hero-stat-num">9,000+</b> happy users</span>
          <span><b className="hero-stat-num">56,737+</b> downloads</span>
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
                {['Dashboard', 'Templates', 'Content', 'Appearance', 'Social', 'contact', 'Newsletter', 'Count Down', 'SEO', 'Advance settings', 'Translation'].map((l, i) => (
                  <div key={l} className="hero-sidebar-item" style={{
                    background: i === 1 ? 'var(--brand-accent-600)' : 'transparent',
                    color: i === 1 ? 'var(--white)' : 'rgba(255,255,255,.7)',
                  }}>{l}</div>
                ))}
              </aside>
              <div className="hero-dashboard-content">
                <div className="hero-template-header">
                  <div className="hero-template-title">Choose a template</div>
                  <Pill tone="new">30 Pro</Pill>
                </div>
                <div className="hero-template-grid">
                  {['#7AAE63','#D9A75A','#5FA9C4','#A88AC9','#E08263','#6CC2A3','#f0a93a','#bdb3a4','#1e88e5'].map((c, i) => (
                    <div key={i} className="hero-tmpl-item" style={{
                      background: `linear-gradient(160deg, ${c}, ${c}cc)`,
                      border: i === 0 ? '2px solid var(--brand-accent-500)' : '1px solid var(--line-100)',
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#513DE8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
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
