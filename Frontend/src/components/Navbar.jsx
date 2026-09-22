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
  {
    name: "Custom Development",
    path: "/services/custom-development",
  },
  {
    name: "Platform Development",
    path: "/services/platform-development",
  },
  {
    name: "Workflow Automation",
    path: "/services/workflow-automation",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `whitespace-nowrap text-[clamp(13px,1.25vw,18px)]  leading-none transition duration-200 ${
      isActive
        ? "text-amber-300 underline underline-offset-4"
        : "text-white/70 hover:text-amber-300"
    }`;

  return (
    <div>
      <header className="relative z-50">
        <div className="navbar-wrapper">
          <nav
            className="
              flex
              h-[clamp(60px,6vw,86px)]
              items-center
              justify-between
              rounded-full
              bg-[linear-gradient(to_right,rgba(22,36,58,0.90)_0%,rgba(22,36,58,0.90)_38%,rgba(16,26,41,0.88)_48%,rgba(8,14,23,0.78)_62%,rgba(2,4,7,0.70)_78%,rgba(0,0,0,0.65)_100%)]
              px-[clamp(12px,2.35vw,34px)]
              shadow-2xl
              shadow-black/20
              backdrop-blur-xl
              w-[clamp(280px,calc(100vw - 40px),1600px)]
               min-w-0
            "
          >
            {/* ================= LOGO ================= */}

            <Link
              to="/"
              className="
               shrink-0
               text-[clamp(25px,2.7vw,39px)]
               font-semibold
               leading-none
               tracking-[-0.04em]
               text-white
              "
            >
              sariya
              <span className="ml-1 inline-block h-[5px] w-[5px] bg-blue-700" />
            </Link>

            {/* ================= DESKTOP NAVIGATION ================= */}

            <div className="hidden items-center  gap-[clamp(16px,2vw,29px)]  min-[1025px]:flex">
              {/* HOME */}

              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              {/* ABOUT */}

              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>

              {/* ================= SERVICES ================= */}

              <div
                className="relative h-full"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {/* Services Main Page Link */}

                <Link
                  to="/services"
                  className={`
                    flex
                    h-full
                    items-center
                    gap-1
                    text-[clamp(13px,1.25vw,18px)]
                    leading-none
                    transition
                    duration-200
                    ${
                      servicesOpen
                        ? "text-[#CAB582]"
                        : "text-white/70 hover:text-[#CAB582]"
                    }
                  `}
                >
                  Services
                  <ChevronDown
                    size={17}
                    strokeWidth={1.8}
                    className={`
                      transition-transform
                      duration-300
                      ease-out
                      ${servicesOpen ? "rotate-180" : ""}
                    `}
                  />
                </Link>

                {/* ================= DROPDOWN ================= */}

                <div
                  className={`
                    absolute
                    left-1/2
                    top-[calc(100%+8px)]
                    z-50
                    w-64
                    -translate-x-1/2
                    transition-all
                    duration-300
                    ease-out

                    ${
                      servicesOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }
                  `}
                >
                  <div
                    className="
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/10
                      bg-gray-800/95
                      p-2
                      shadow-2xl
                      shadow-black/40
                      backdrop-blur-xl
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
                          text-white/75
                          transition-all
                          duration-200
                          hover:bg-white/10
                          hover:text-[#CAB582]
                        "
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ */}

              <NavLink to="/faq" className={navLinkClass}>
                Faq
              </NavLink>

              {/* CONTACT */}

              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </div>

            {/* ================= CALL NOW ================= */}
            <div
              className="
    flex
    shrink-0
    items-center
    gap-[clamp(6px,1vw,14px)]
  "
            >
              <Link
                to="/contact"
                className="
                hidden
                rounded-full
                bg-white
                 px-[clamp(16px,2.65vw,38px)]
                 py-[clamp(9px,1vw,15px)]
                 text-[clamp(12px,1.5vw,16px)]
                font-bold
                text-[#082f7b]
                transition-all
                hover:bg-blue-100
                 duration-200
                 min-[1025px]:block
                 shrink-0
                 whitespace-nowrap
              "
              >
                Call Now
              </Link>

              {/* ================= MOBILE BUTTON ================= */}

              <button
                onClick={() => setOpen(!open)}
                className="
               flex
               shrink-0
               items-center
               justify-center
                rounded-full
                p-[clamp(7px,0.8vw,10px)]
              text-white
                transition-all
                duration-200
                 min-[1025px]:hidden
              "
                aria-label="Toggle navigation"
                aria-expanded={open}
              >
                {open ? (
                  <X
                    className="
          h-[clamp(18px,1.8vw,24px)]
          w-[clamp(18px,1.8vw,24px)]
        "
                  />
                ) : (
                  <Menu
                    className="
          h-[clamp(18px,1.8vw,24px)]
          w-[clamp(18px,1.8vw,24px)]
        "
                  />
                )}
              </button>
            </div>
          </nav>

          {/* ================= MOBILE NAVIGATION ================= */}

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
                min-[1025px]:hidden
              "
            >
              <div className="grid gap-1">
                {/* HOME */}

                <NavLink
                  to="/"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-amber-300/10 text-[#CAB582] underline underline-offset-4"
                        : "text-white/75 hover:bg-amber-300/10 hover:text-[#CAB582]"
                    }`
                  }
                >
                  Home
                </NavLink>

                {/* ABOUT */}

                <NavLink
                  to="/about"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-amber-300/10 text-[#CAB582] underline underline-offset-4"
                        : "text-white/75 hover:bg-amber-300/10 hover:text-[#CAB582]"
                    }`
                  }
                >
                  About
                </NavLink>

                {/* ================= MOBILE SERVICES ================= */}

                <div>
                  {/* Services Main Page */}

                  <div className="flex items-center">
                    <Link
                      to="/services"
                      onClick={() => {
                        setOpen(false);
                        setServicesOpen(false);
                      }}
                      className="
                        flex-1
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        text-white/75
                        transition
                        hover:bg-amber-300/10
                        hover:text-[#CAB582]
                      "
                    >
                      Services
                    </Link>

                    {/* Dropdown Toggle */}

                    <button
                      type="button"
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="
                        rounded-xl
                        p-3
                        text-white/75
                        transition
                        hover:bg-amber-300/10
                        hover:text-[#CAB582]
                      "
                      aria-label="Toggle services"
                    >
                      <ChevronDown
                        size={16}
                        className={`
                          transition-transform
                          duration-300
                          ${servicesOpen ? "rotate-180" : ""}
                        `}
                      />
                    </button>
                  </div>

                  {/* Mobile Service Links */}

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
                            hover:text-[#CAB582]
                          "
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
                        ? "bg-amber-300/10 text-[#CAB582] underline underline-offset-4"
                        : "text-white/75 hover:bg-amber-300/10 hover:text-[#CAB582]"
                    }`
                  }
                >
                  Faq
                </NavLink>

                {/* CONTACT */}

                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-amber-300/10 text-[#CAB582] underline underline-offset-4"
                        : "text-white/75 hover:bg-amber-300/10 hover:text-[#CAB582]"
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
