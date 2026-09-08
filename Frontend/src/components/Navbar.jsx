import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Faq", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  { name: "All Services", path: "/services" },
  { name: "Web Development", path: "/services/web-development" },
  { name: "Platform Development", path: "/services/platform-development" },
  { name: "Workflow Automation", path: "/services/workflow-automation" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Active page styling
  const navLinkClass = ({ isActive }) =>
    `text-[18px] transition duration-200 ${
      isActive
        ? "text-amber-300 underline underline-offset-4"
        : "text-white/65 hover:text-amber-300"
    }`;

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-[1350px] px-4 pt-15">

        {/* Navbar - 1190 x 80 */}
        <nav className="flex h-[80px] items-center justify-between rounded-full border border-white/10 bg-[#0b1422]/90 px-10 shadow-2xl shadow-black/20 backdrop-blur-xl">

          {/* Logo */}
          <Link
            to="/"
            className="text-[40px] font-semibold tracking-tight text-white"
          >
            sariya
            <span className="ml-1 inline-block h-1.5 w-1 bg-blue-800"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">

            {/* Home */}
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            {/* About */}
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 text-[18px] transition duration-200 ${
                  servicesOpen
                    ? "text-amber-300"
                    : "text-white/65 hover:text-amber-300"
                }`}
              >
                Services

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3">
                  <div className="rounded-2xl border border-white/10 bg-[#0b1422] p-2 shadow-2xl">

                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block rounded-xl px-4 py-3 text-[15px] text-white/70 transition duration-200 hover:bg-amber-300/10 hover:text-amber-300"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}

                  </div>
                </div>
              )}
            </div>

            {/* FAQ */}
            <NavLink to="/faq" className={navLinkClass}>
              Faq
            </NavLink>

            {/* Contact */}
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* Call Now */}
          <Link
            to="/contact"
            className="hidden rounded-full bg-white px-10 py-3 text-[16px] font-sans font-bold text-[#082f7b] transition hover:bg-blue-100 sm:block"
          >
            Call Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-[#0b1422]/95 p-4 backdrop-blur-xl md:hidden">

            <div className="grid gap-1">

              {links.slice(0, 2).map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-amber-300/10 text-amber-300 underline underline-offset-4"
                        : "text-white/75 hover:bg-amber-300/10 hover:text-amber-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile Services */}
              <div>
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-amber-300/10 hover:text-amber-300"
                >
                  Services

                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="ml-4 mt-1 border-l border-white/10 pl-2">

                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        onClick={() => {
                          setOpen(false);
                          setServicesOpen(false);
                        }}
                        className="block rounded-lg px-4 py-2 text-xs text-white/55 transition hover:bg-amber-300/10 hover:text-amber-300"
                      >
                        {service.name}
                      </Link>
                    ))}

                  </div>
                )}
              </div>

              {/* FAQ */}
              <NavLink
                to="/faq"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm transition ${
                    isActive
                      ? "bg-amber-300/10 text-amber-300 underline underline-offset-4"
                      : "text-white/75 hover:bg-amber-300/10 hover:text-amber-300"
                  }`
                }
              >
                Faq
              </NavLink>

              {/* Contact */}
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm transition ${
                    isActive
                      ? "bg-amber-300/10 text-amber-300 underline underline-offset-4"
                      : "text-white/75 hover:bg-amber-300/10 hover:text-amber-300"
                  }`
                }
              >
                Contact
              </NavLink>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}