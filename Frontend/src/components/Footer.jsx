const columns = [
  ["Quick Links", ["Home", "About", "Services", "FAQ", "Contact"]],
  ["Services", ["Custom Development", "Platform Development", "Workflow Automation"]],
];

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="text-lg font-bold">sariya<span className="text-blue-500">.</span></p>
            <p className="mt-5 max-w-xs text-[10px] leading-5 text-white/45">
              We would love to hear from you. Have an idea? Let's turn it into an automated system.
            </p>
            <a href="#contact" className="mt-5 inline-block rounded-full border border-white/15 px-4 py-2 text-[9px]">
              Request a quote
            </a>
          </div>

          {columns.map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[10px] font-semibold">{title}</h3>
              <div className="mt-5 grid gap-3">
                {links.map((link) => (
                  <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-[9px] text-white/45 hover:text-white">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-[10px] font-semibold">Contact Us</h3>
            <p className="mt-5 text-[9px] leading-5 text-white/45">
              +91 98765 43210<br />
              hello@sariya.design
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-[8px] text-white/35">
          © 2026 Sariya Designs. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
