const Footer = () => {
  const productLinks = [
    { label: 'Themes', href: 'https://rstheme.com/wordpress-themes/' },
    { label: 'Plugins', href: 'https://rstheme.com/wordpress-plugins/' },
    { label: 'React Template', href: 'https://rstheme.com/react-templates/' },
    { label: 'HTML Template', href: 'https://rstheme.com/html-templates/' },
  ];

  const resourceLinks = [
    { label: 'Documentation', href: 'https://wpucs.com/docs/rs-coming-soon-maintenance-plugin/' },
    { label: 'Support', href: 'https://rstheme.com/support/' },
    { label: 'Blog', href: 'https://wpucs.com/blog/' },
    { label: 'Refund Policy', href: 'https://rstheme.com/refund-policy/' },
  ];

  const companyLinks = [
    { label: 'About RSTheme', href: 'https://rstheme.com/about/' },
    { label: 'Contact', href: 'https://rstheme.com/contact/' },
    { label: 'Terms', href: 'https://rstheme.com/terms-and-conditions/' },
    { label: 'Privacy', href: 'https://rstheme.com/privacy-policy-for-rstheme/' },
  ];

  return (
    <footer className="ftr-root">
      <div className="ftr-inner">
        <div className="ftr-columns">
          <div className="ftr-brand">
            <Logo2 dark />
            <p className="ftr-brand-p">
              WPUCS is part of{' '}
              <span className="ftr-brand-highlight">RSTheme</span>, makers of
              100+ premium WordPress themes and plugins, trusted by 150,000+
              customers worldwide.
            </p>
          </div>

          <div>
            <div className="ftr-nav-heading">Product</div>
            {productLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="ftr-nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <div className="ftr-nav-heading">Resources</div>
            {resourceLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="ftr-nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <div className="ftr-nav-heading">Company</div>
            {companyLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="ftr-nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="ftr-bottom">
          <div>© 2026 RSTheme · All Rights Reserved.</div>

          <div className="ftr-payments">
            <span>Secure payment</span>

            {[
              { name: 'Visa', href: 'https://visa.com' },
              { name: 'PayPal', href: 'https://paypal.com' },
              { name: 'Amex', href: 'https://americanexpress.com' },
              { name: 'Stripe', href: 'https://stripe.com' },
            ].map(p => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ftr-payment-badge"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

window.Footer = Footer;