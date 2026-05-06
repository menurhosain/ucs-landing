const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['Templates', 'Features', 'Pricing', 'Reviews', 'Docs', 'Blog'];
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
            <a key={l} href={`#${l.toLowerCase()}`} className="hdr-nav-link">{l}</a>
          ))}
        </nav>
        <div className="hdr-actions">
f          <Btn variant="ghost" size="sm">Sign in</Btn>
          <Btn variant="primary" size="sm">Buy Now</Btn>
        </div>
      </div>
    </header>
  );
};
window.Header = Header;
