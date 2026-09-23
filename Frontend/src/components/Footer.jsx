import footer from "../assets/video/footer.mov";
import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/FAQ" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
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

  const arrowLinkClass = `
    group
    flex
    min-w-0
    w-fit
    max-w-full
    items-center
    gap-[clamp(0.35rem,0.6vw,0.5rem)]
    text-[clamp(0.7rem,0.85vw,0.9375rem)]
    leading-[1.4]
    text-[#C2C2C2]
    transition-colors
    duration-300
    ease-in-out
    hover:text-[#F8DC9B]
  `;

  const arrowIconClass = `
    fa-solid
    fa-angles-right
    shrink-0
    -translate-x-[clamp(0.4rem,0.7vw,0.75rem)]
    text-[clamp(0.45rem,0.55vw,0.625rem)]
    opacity-0
    transition-all
    duration-300
    ease-in-out
    group-hover:translate-x-0
    group-hover:opacity-100
  `;

  const arrowTextClass = `
    min-w-0
    -translate-x-[clamp(0.4rem,0.7vw,0.75rem)]
    break-words
    transition-transform
    duration-300
    ease-in-out
    group-hover:translate-x-0
  `;

  return (
    <footer className="relative w-full max-w-full overflow-hidden text-white">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black" />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        >
          <source src={footer} type="video/mp4" />
        </video>

        {/* Subtle abstract waves */}
        <div
          className="
            absolute
            inset-0
            opacity-30
            bg-[radial-gradient(ellipse_at_25%_50%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(ellipse_at_45%_70%,rgba(255,255,255,0.05),transparent_30%)]
          "
        />

        <div
          className="
            absolute
            -left-[12%]
            top-[25%]
            h-[clamp(14rem,35vw,31.25rem)]
            w-[clamp(20rem,48vw,43.75rem)]
            rotate-[-20deg]
            rounded-[50%]
            border
            border-white/[0.025]
            shadow-[0_0_80px_rgba(255,255,255,0.02)]
          "
        />

        <div
          className="
            absolute
            left-[15%]
            top-[45%]
            h-[clamp(11rem,28vw,25rem)]
            w-[clamp(18rem,45vw,40.625rem)]
            rotate-[25deg]
            rounded-[50%]
            border
            border-white/[0.02]
          "
        />
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1920px]
          px-[clamp(1rem,3.2vw,3.375rem)]
          py-[clamp(2.5rem,5vw,3.5rem)]
        "
      >
        {/* ================= TOP CONTENT ================= */}
        <div
          className="
            grid
            w-full
            min-w-0
            grid-cols-1
            gap-[clamp(2.5rem,5vw,4rem)]
            sm:grid-cols-2
            sm:gap-x-[clamp(2rem,5vw,4rem)]
            sm:gap-y-[clamp(2.5rem,5vw,4rem)]
            lg:grid-cols-[1.45fr_0.85fr_1fr_0.75fr]
            lg:gap-[clamp(2rem,4vw,4rem)]
          "
        >
          {/* ================= BRAND ================= */}
          <div className="min-w-0 w-full">
            {/* Logo */}
            <Link
              to="/"
              className="
                block
                w-fit
                max-w-full
                text-[clamp(1.5rem,3vw,2.5rem)]
                font-bold
                leading-none
                tracking-[clamp(-0.08em,-0.15vw,-0.05em)]
              "
            >
              sariya<span className="text-[#1C39DC]">.</span>
            </Link>

            {/* Heading */}
            <p
              className="
                mt-[clamp(1.25rem,2.5vw,1.75rem)]
                max-w-full
                text-[clamp(1rem,1.55vw,1.46rem)]
                leading-[1.2]
              "
            >
              We would love to hear from you.
            </p>

            {/* Description */}
            <p
              className="
                mt-[clamp(0.75rem,1.5vw,1rem)]
                w-full
                max-w-[clamp(18rem,32vw,31.25rem)]
                break-words
                text-[clamp(0.7rem,0.85vw,0.8125rem)]
                font-normal
                leading-[1.5]
                text-white
              "
            >
              Feel free to reach out if you want to collaborate with our team.
            </p>

            {/* CTA */}
            <Link
              to="/contact"
              className="
                mt-[clamp(1.25rem,2vw,1.5rem)]
                flex
                w-fit
                max-w-full
                items-center
                gap-[clamp(0.4rem,0.7vw,0.75rem)]
                rounded-full
                bg-white
                px-[clamp(1rem,1.8vw,1.5rem)]
                py-[clamp(0.6rem,1vw,0.75rem)]
                text-[clamp(0.7rem,0.9vw,1.0625rem)]
                font-normal
                leading-none
                text-black
                transition-all
                duration-300
                ease-in-out
                hover:scale-[1.03]
                hover:bg-[#4A4A4A]
                hover:text-white
                hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]
              "
            >
              <i
                className="
                  fa-solid
                  fa-plus
                  flex
                  aspect-square
                  w-[clamp(0.7rem,1vw,0.9375rem)]
                  shrink-0
                  items-center
                  justify-center
                  text-[clamp(0.6rem,0.8vw,0.875rem)]
                "
              />

              <span className="whitespace-nowrap">
                Become a client
              </span>
            </Link>

            {/* Email */}
            <p
              className="
                mt-[clamp(1.5rem,3vw,2.25rem)]
                w-full
                max-w-[clamp(18rem,25vw,21.875rem)]
                break-words
                text-[clamp(0.7rem,0.85vw,0.875rem)]
                leading-[1.55]
                text-white
              "
            >
              Have other questions or just want to ask?{" "}
              <a
                href="mailto:care@sariyadesigns.com"
                className="
                  font-bold
                  break-all
                  transition-colors
                  duration-300
                  hover:text-[#F8DC9B]
                "
              >
                care@sariyadesigns.com
              </a>
            </p>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="min-w-0 w-full">
            <h3
              className="
                text-[clamp(0.8rem,1.25vw,1.25rem)]
                font-normal
                leading-[1.2]
                text-white
              "
            >
              Quick Links
            </h3>

            <nav
              className="
                mt-[clamp(1rem,1.5vw,1.25rem)]
                flex
                flex-col
                gap-[clamp(0.65rem,1vw,0.8rem)]
              "
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={arrowLinkClass}
                >
                  <i className={arrowIconClass} />

                  <span className={arrowTextClass}>
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* ================= SERVICES ================= */}
          <div className="min-w-0 w-full">
            <h3
              className="
                text-[clamp(0.8rem,1.25vw,1.25rem)]
                font-normal
                leading-[1.2]
                text-white
              "
            >
              Services
            </h3>

            <nav
              className="
                mt-[clamp(1rem,1.5vw,1.25rem)]
                flex
                flex-col
                gap-[clamp(0.65rem,1vw,0.8rem)]
              "
            >
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className={arrowLinkClass}
                >
                  <i className={arrowIconClass} />

                  <span className={arrowTextClass}>
                    {service.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="min-w-0 w-full">
            <h3
              className="
                text-[clamp(0.8rem,1.25vw,1.25rem)]
                font-normal
                leading-[1.2]
                text-white
              "
            >
              Contact Us
            </h3>

            <div
              className="
                mt-[clamp(1rem,1.5vw,1.25rem)]
                flex
                flex-col
                gap-[clamp(0.65rem,1vw,0.8rem)]
              "
            >
              {/* Phone */}
              <a
                href="tel:+918826418355"
                className={arrowLinkClass}
              >
                <i className={arrowIconClass} />

                <span className={arrowTextClass}>
                  +91-8826418355
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:care@sariyadesigns.com"
                className="
                  group
                  flex
                  min-w-0
                  w-fit
                  max-w-full
                  items-start
                  gap-[clamp(0.35rem,0.6vw,0.5rem)]
                  text-[clamp(0.7rem,0.85vw,0.9375rem)]
                  leading-[1.4]
                  text-[#C2C2C2]
                  transition-colors
                  duration-300
                  ease-in-out
                  hover:text-[#F8DC9B]
                "
              >
                <i
                  className="
                    fa-solid
                    fa-angles-right
                    mt-[0.2em]
                    shrink-0
                    -translate-x-[clamp(0.4rem,0.7vw,0.75rem)]
                    text-[clamp(0.45rem,0.55vw,0.625rem)]
                    opacity-0
                    transition-all
                    duration-300
                    ease-in-out
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    min-w-0
                    max-w-full
                    break-all
                    -translate-x-[clamp(0.4rem,0.7vw,0.75rem)]
                    transition-transform
                    duration-300
                    ease-in-out
                    group-hover:translate-x-0
                  "
                >
                  care@sariyadesigns.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div
          className="
            mt-[clamp(2.5rem,5vw,3rem)]
            h-px
            w-full
            bg-white/20
          "
        />

        {/* ================= BOTTOM ================= */}
        <div
          className="
            flex
            w-full
            min-w-0
            flex-col
            gap-[clamp(1.5rem,3vw,2rem)]
            pt-[clamp(1.25rem,2vw,1.75rem)]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* ================= SOCIAL ICONS ================= */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-[clamp(0.5rem,0.8vw,0.75rem)]
            "
          >
            {/* Facebook */}
            <a
              href="https://www.facebook.com/sariyadesigns/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="
                flex
                aspect-square
                w-[clamp(2rem,3vw,2.25rem)]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                transition-all
                duration-300
                ease-in-out
                hover:scale-110
              "
            >
              <i
                className="
                  fa-brands
                  fa-facebook-f
                  text-[clamp(1rem,1.5vw,1.45rem)]
                "
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sariya.designs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                flex
                aspect-square
                w-[clamp(2rem,3vw,2.25rem)]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                transition-all
                duration-300
                ease-in-out
                hover:scale-110
              "
            >
              <i
                className="
                  fa-brands
                  fa-instagram
                  text-[clamp(1rem,1.5vw,1.45rem)]
                "
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918826418355"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="
                flex
                aspect-square
                w-[clamp(2rem,3vw,2.25rem)]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                transition-all
                duration-300
                ease-in-out
                hover:scale-110
              "
            >
              <i
                className="
                  fa-brands
                  fa-whatsapp
                  text-[clamp(1rem,1.5vw,1.45rem)]
                "
              />
            </a>
          </div>

          {/* ================= COPYRIGHT + LINKS ================= */}
          <div
            className="
              flex
              min-w-0
              max-w-full
              flex-wrap
              items-center
              gap-x-[clamp(1rem,2vw,2rem)]
              gap-y-[clamp(0.5rem,1vw,0.75rem)]
              text-[clamp(0.65rem,0.8vw,0.875rem)]
              leading-[1.4]
              text-white
              sm:justify-end
            "
          >
            <p className="break-words">
              © 2026 Sariya Designs | All Rights Reserved.
            </p>

            {/* Terms */}
            <Link
              to="/terms"
              className="
                whitespace-nowrap
                transition-colors
                duration-300
                hover:text-[#F8DC9B]
              "
            >
              Terms
            </Link>

            {/* Privacy */}
            <Link
              to="/privacy"
              className="
                whitespace-nowrap
                transition-colors
                duration-300
                hover:text-[#F8DC9B]
              "
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}