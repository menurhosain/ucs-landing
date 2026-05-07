const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close on Escape
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const links = [
    { label: 'Templates', href: '#templates' },
    { label: 'Features',  href: '#features'  },
    { label: 'Pricing',   href: '#pricing'   },
    { label: 'Reviews',   href: '#reviews'   },
    { label: 'Docs',      href: 'https://wpucs.com/docs/rs-coming-soon-maintenance-plugin/' },
    { label: 'Blog',      href: 'https://wpucs.com/blog/' },
  ];

  const isExternal = (href) => href.startsWith('http');

  return (
    <>
      <header className="hdr-root" style={{
        background: scrolled ? 'rgba(250,251,247,.85)' : 'var(--bg-page)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line-100)' : '1px solid transparent',
      }}>
        
        <div className="hdr-inner" style={{ height: scrolled ? 64 : 76 }}>
          <Logo />
          <nav className="hdr-nav">
            {links.map(l => (
              <a key={l.label} href={l.href} className="hdr-nav-link">{l.label}</a>
            ))}
          </nav>
          <div className="hdr-actions">
            <Btn href="#pricing" variant="primary" size="md">Buy Now</Btn>
            <button
              className={`hdr-hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`offcanvas-overlay${menuOpen ? ' active visible' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Offcanvas panel */}
      <div
        className={`offcanvas${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="offcanvas-head">
          <Logo />
          <button
            className="offcanvas-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >✕</button>
        </div>

        <nav className="offcanvas-nav">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="offcanvas-nav-link"
              onClick={() => setMenuOpen(false)}
              {...(isExternal(l.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {l.label}
              <span className="nav-arrow">{isExternal(l.href) ? '↗' : '›'}</span>
            </a>
          ))}
        </nav>

        <div className="offcanvas-footer">
          <Btn href="#pricing" variant="primary" onClick={() => setMenuOpen(false)}>
            Buy Now
          </Btn>
        </div>
      </div>
    </>
  );
};

window.Header = Header;