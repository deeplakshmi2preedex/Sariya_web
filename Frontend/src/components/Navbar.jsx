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

  const navLinkClass = ({ isActive }) =>
    `text-[18px] leading-none transition duration-200 ${
      isActive
        ? "text-amber-300 underline underline-offset-4"
        : "text-white/70 hover:text-amber-300"
    }`;

  return (
    <div>
      <header className="relative z-50">
        {/*  NAVBAR*/}

        <div className="navbar-wrapper">
          <nav
            className="
            flex
            h-[86px]
            items-center
            justify-between
            rounded-full
            bg-[linear-gradient(to_right,rgba(22,36,58,0.90)_0%,rgba(22,36,58,0.90)_38%,rgba(16,26,41,0.88)_48%,rgba(8,14,23,0.78)_62%,rgba(2,4,7,0.70)_78%,rgba(0,0,0,0.65)_100%)]
            px-[34px]
            shadow-2xl
            shadow-black/20
            backdrop-blur-xl
          "
          >
            {/* LOGO */}
            <Link
              to="/"
              className="
              text-[39px]
              font-semibold
              leading-none
              tracking-[-0.04em]
              text-white
            "
            >
              sariya
              <span className="ml-1 inline-block h-[5px] w-[5px] bg-blue-700" />
            </Link>

            {/* DESKTOP NAVIGATION*/}

            <div className="hidden items-center gap-[29px] md:flex">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>

              {/* SERVICES */}

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`
                  flex
                  items-center
                  gap-1
                  text-[18px]
                  leading-none
                  transition
                  duration-200
                  ${
                    servicesOpen
                      ? "text-amber-300"
                      : "text-white/70 hover:text-amber-300"
                  }
                `}
                >
                  Services
                  <ChevronDown
                    size={17}
                    strokeWidth={1.8}
                    className={`
                    transition-transform
                    duration-200
                    ${servicesOpen ? "rotate-180" : ""}
                  `}
                  />
                </button>

                {servicesOpen && (
                  <div
                    className="
                    absolute
                    left-1/2
                    top-full
                    z-50
                    w-60
                    -translate-x-1/2
                    pt-3
                  "
                  >
                    <div
                      className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#0b1422]
                      p-2
                      shadow-2xl
                    "
                    >
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => setServicesOpen(false)}
                          className="
                          block
                          rounded-xl
                          px-4
                          py-3
                          text-[15px]
                          text-white/70
                          transition
                          duration-200
                          hover:bg-amber-300/10
                          hover:text-amber-300
                        "
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/faq" className={navLinkClass}>
                Faq
              </NavLink>

              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </div>

            {/* CALL NOW */}

            <Link
              to="/contact"
              className="
              hidden
              rounded-full
              bg-white
              px-[38px]
              py-[15px]
              text-[16px]
              font-bold
              text-[#082f7b]
              transition
              hover:bg-blue-100
              sm:block
            "
            >
              Call Now
            </Link>

            {/* MOBILE */}

            <button
              onClick={() => setOpen(!open)}
              className="
              rounded-full
              p-2
              text-white
              md:hidden
            "
              aria-label="Toggle navigation"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {/* ==================================================
            MOBILE NAV
            ================================================== */}

          {open && (
            <div
              className="
              mt-2
              rounded-2xl
              border
              border-white/10
              bg-[#0b1422]/95
              p-4
              backdrop-blur-xl
              md:hidden
            "
            >
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

                {/* MOBILE SERVICES */}

                <div>
                  <button
                    type="button"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    text-white/75
                    transition
                    hover:bg-amber-300/10
                    hover:text-amber-300
                  "
                  >
                    Services
                    <ChevronDown
                      size={16}
                      className={
                        servicesOpen
                          ? "rotate-180 transition-transform"
                          : "transition-transform"
                      }
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
                          className="
                          block
                          rounded-lg
                          px-4
                          py-2
                          text-xs
                          text-white/55
                          transition
                          hover:bg-amber-300/10
                          hover:text-amber-300
                        "
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

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
    </div>
  );
}
