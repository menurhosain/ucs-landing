const Footer = () => (
  <footer className="ftr-root">
    <div className="ftr-inner">
      <div className="ftr-columns">
        <div className="ftr-brand">
          <Logo2 dark/>
          <p className="ftr-brand-p">
            WPUCS is part of <span className="ftr-brand-highlight">RSTheme</span>, makers of 100+ premium WordPress themes and plugins, trusted by 150,000+ customers worldwide.
          </p>
        </div>
        <div>
          <div className="ftr-nav-heading">Product</div>
          {['Templates', 'Features', 'Pricing', 'Changelog'].map(l => (
            <a key={l} href="#" className="ftr-nav-link">{l}</a>
          ))}
        </div>
        <div>
          <div className="ftr-nav-heading">Resources</div>
          {['Documentation', 'Support', 'Blog', 'Refund Policy'].map(l => (
            <a key={l} href="#" className="ftr-nav-link">{l}</a>
          ))}
        </div>
        <div>
          <div className="ftr-nav-heading">Company</div>
          {['About RSTheme', 'Contact', 'Terms', 'Privacy'].map(l => (
            <a key={l} href="#" className="ftr-nav-link">{l}</a>
          ))}
        </div>
      </div>
      <div className="ftr-bottom">
        <div>© 2026 RSTheme · All Rights Reserved.</div>
        <div className="ftr-payments">
          <span>Secure payment</span>
          {['Visa', 'PayPal', 'Amex', 'Stripe'].map(p => (
            <span key={p} className="ftr-payment-badge">{p}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
window.Footer = Footer;



