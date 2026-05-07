const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Templates', href: '#templates' },
    { label: 'Features',  href: '#features'  },
    { label: 'Pricing',   href: '#pricing'   },
    { label: 'Reviews',   href: '#reviews'   },
    { label: 'Docs',      href: 'https://wpucs.com/docs/rs-coming-soon-maintenance-plugin/' },
    { label: 'Blog',      href: 'https://wpucs.com/blog/' },
  ];

  return (
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
          <Btn href="#pricing" variant="primary" size="sm">Buy Now</Btn>
        </div>
      </div>
    </header>
  );
};

window.Header = Header;