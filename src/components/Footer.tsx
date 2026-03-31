const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-display)" }}>
          Elbi Homes
        </p>
        <div className="flex items-center gap-6">
          <a href="#homes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Homes
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Elbi Homes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
