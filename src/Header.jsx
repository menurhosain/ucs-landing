const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['Templates', 'Features', 'Pricing', 'Reviews', 'Docs', 'Blog'];
  return (
    <header className="header-main" style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(250,251,247,.85)' : 'var(--bg-page)',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line-100)' : '1px solid transparent',
      transition: 'all .2s var(--ease-out)',
    }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto', padding: '0 24px',
        height: scrolled ? 64 : 76,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'height .2s var(--ease-out)',
      }}>
        <Logo />
        <nav style={{ display: 'flex', gap: 28 }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              font: '500 14px var(--font-display)',
              color: 'var(--fg-2)', textDecoration: 'none',
            }}>{l}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Btn variant="ghost" size="sm">Sign in</Btn>
          <Btn variant="primary" size="sm">Buy Now</Btn>
        </div>
      </div>
    </header>
  );
};
window.Header = Header;
