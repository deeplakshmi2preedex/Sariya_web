import footer from "../assets/video/footer.mov";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-black" />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={footer} type="video/mp4" />
        </video>

        {/* Subtle abstract waves */}
        <div
          className="
            absolute inset-0 opacity-30
            bg-[radial-gradient(ellipse_at_25%_50%,rgba(255,255,255,0.08),transparent_35%),
            radial-gradient(ellipse_at_45%_70%,rgba(255,255,255,0.05),transparent_30%)]
          "
        />

        <div
          className="
            absolute -left-[10%] top-[25%]
            h-[500px] w-[700px]
            rotate-[-20deg]
            rounded-[50%]
            border border-white/[0.025]
            shadow-[0_0_80px_rgba(255,255,255,0.02)]
          "
        />

        <div
          className="
            absolute left-[15%] top-[45%]
            h-[400px] w-[650px]
            rotate-[25deg]
            rounded-[50%]
            border border-white/[0.02]
          "
        />
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div
        className="
          relative z-10 mx-auto max-w-[1920px]
          px-6 py-12
          sm:px-10
          lg:px-[54px] lg:py-14
        "
      >
        {/* ================= TOP CONTENT ================= */}
        <div
          className="
            grid gap-12
            sm:grid-cols-2
            lg:grid-cols-[1.45fr_0.85fr_1fr_0.75fr]
            lg:gap-16
          "
        >
          {/* ================= BRAND ================= */}
          <div>
            {/* Logo */}
            <Link
              to="/"
              className="
                block w-fit
                text-[clamp(15px,4vw,40px)]
                font-bold
                leading-none
                tracking-[-2px]
              "
            >
              sariya<span className="text-[#1C39DC]">.</span>
            </Link>

            {/* Heading */}
            <p
              className="
                mt-7
                text-[clamp(18px,2vw,23.36px)]
                leading-[1.2]
              "
            >
              We would love to hear from you.
            </p>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-[500px]
                text-[clamp(8px,2vw,13px)]
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
                mt-6
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-white
                px-6
                py-3
                text-[clamp(10px,2vw,17px)]
                font-normal
                text-black
                transition-all
                duration-300
                ease-in-out
                hover:scale-105
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
                  h-[15px]
                  w-[15px]
                  items-center
                  justify-center
                  text-[14px]
                  transition-colors
                  duration-300
                  ease-in-out
                "
              />

              <span className="transition-colors duration-300 ease-in-out">
                Become a client
              </span>
            </Link>

            {/* Email */}
            <p
              className="
                mt-9
                max-w-[350px]
                text-[clamp(9px,2vw,14px)]
                leading-[1.55]
                text-white
              "
            >
              Have other questions or just want to
              <br />
              ask?{" "}
              <a
                href="mailto:care@sariyadesigns.com"
                className="
                  font-bold
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
          <div>
            <h3 className="text-[clamp(9px,2vw,20px)] font-normal text-white">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {/* Home */}
              <Link
                to="/"
                className="
                  group flex w-fit items-center gap-2
                  text-[clamp(9px,2vw,15px)]
                  text-[#C2C2C2]
                  transition-colors duration-300 ease-in-out
                  hover:text-[#F8DC9B]
                "
              >
                <i
                  className="
                    fa-solid fa-angles-right
                    -translate-x-3
                    text-[10px]
                    opacity-0
                    transition-all duration-300 ease-in-out
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    -translate-x-2
                    transition-transform duration-300 ease-in-out
                    group-hover:translate-x-0
                  "
                >
                  Home
                </span>
              </Link>

              {/* About */}
              <Link
                to="/about"
                className="
                  group flex w-fit items-center gap-2
                  text-[clamp(9px,2vw,15px)]
                  text-[#C2C2C2]
                  transition-colors duration-300 ease-in-out
                  hover:text-[#F8DC9B]
                "
              >
                <i
                  className="
                    fa-solid fa-angles-right
                    -translate-x-3
                    text-[10px]
                    opacity-0
                    transition-all duration-300 ease-in-out
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    -translate-x-2
                    transition-transform duration-300 ease-in-out
                    group-hover:translate-x-0
                  "
                >
                  About
                </span>
              </Link>

              {/* Services */}
              <Link
                to="/services"
                className="
                  group flex w-fit items-center gap-2
                  text-[clamp(9px,2vw,15px)]
                  text-[#C2C2C2]
                  transition-colors duration-300 ease-in-out
                  hover:text-[#F8DC9B]
                "
              >
                <i
                  className="
                    fa-solid fa-angles-right
                    -translate-x-3
                    text-[10px]
                    opacity-0
                    transition-all duration-300 ease-in-out
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    -translate-x-2
                    transition-transform duration-300 ease-in-out
                    group-hover:translate-x-0
                  "
                >
                  Services
                </span>
              </Link>

              {/* FAQ */}
              <Link
                to="/FAQ"
                className="
                  group flex w-fit items-center gap-2
                  text-[clamp(9px,2vw,15px)]
                  text-[#C2C2C2]
                  transition-colors duration-300 ease-in-out
                  hover:text-[#F8DC9B]
                "
              >
                <i
                  className="
                    fa-solid fa-angles-right
                    -translate-x-3
                    text-[10px]
                    opacity-0
                    transition-all duration-300 ease-in-out
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    -translate-x-2
                    transition-transform duration-300 ease-in-out
                    group-hover:translate-x-0
                  "
                >
                  FAQ
                </span>
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className="
                  group flex w-fit items-center gap-2
                  text-[clamp(9px,2vw,15px)]
                  text-[#C2C2C2]
                  transition-colors duration-300 ease-in-out
                  hover:text-[#F8DC9B]
                "
              >
                <i
                  className="
                    fa-solid fa-angles-right
                    -translate-x-3
                    text-[10px]
                    opacity-0
                    transition-all duration-300 ease-in-out
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    -translate-x-2
                    transition-transform duration-300 ease-in-out
                    group-hover:translate-x-0
                  "
                >
                  Contact
                </span>
              </Link>
            </nav>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h3 className="text-[clamp(9px,2vw,20px)] font-normal text-white">
              Services
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {/* Custom Development */}
              <Link
                to="/services/custom-development"
                className="
                  group flex w-fit items-center gap-2
                  text-[clamp(9px,2vw,15px)]
                  text-[#C2C2C2]
                  transition-colors duration-300 ease-in-out
                  hover:text-[#F8DC9B]
                "
              >
                <i
                  className="
                    fa-solid fa-angles-right
                    -translate-x-3
                    text-[10px]
                    opacity-0
                    transition-all duration-300 ease-in-out
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    -translate-x-2
                    transition-transform duration-300 ease-in-out
                    group-hover:translate-x-0
                  "
                >
                  Custom Development
                </span>
              </Link>

              {/* Platform Development */}
              <Link
                to="/services/platform-development"
                className="
                  group flex w-fit items-center gap-2
                  text-[clamp(9px,2vw,15px)]
                  text-[#C2C2C2]
                  transition-colors duration-300 ease-in-out
                  hover:text-[#F8DC9B]
                "
              >
                <i
                  className="
                    fa-solid fa-angles-right
                    -translate-x-3
                    text-[10px]
                    opacity-0
                    transition-all duration-300 ease-in-out
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    -translate-x-2
                    transition-transform duration-300 ease-in-out
                    group-hover:translate-x-0
                  "
                >
                  Platform Development
                </span>
              </Link>

              {/* Workflow Automation */}
              <Link
                to="/services/workflow-automation"
                className="
                  group flex w-fit items-center gap-2
                  text-[clamp(9px,2vw,15px)]
                  text-[#C2C2C2]
                  transition-colors duration-300 ease-in-out
                  hover:text-[#F8DC9B]
                "
              >
                <i
                  className="
                    fa-solid fa-angles-right
                    -translate-x-3
                    text-[10px]
                    opacity-0
                    transition-all duration-300 ease-in-out
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    -translate-x-2
                    transition-transform duration-300 ease-in-out
                    group-hover:translate-x-0
                  "
                >
                  Workflow Automation
                </span>
              </Link>
            </nav>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="text-[clamp(9px,2vw,20px)] font-normal text-white">
              Contact Us
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {/* Phone */}
              <a
                href="tel:+918826418355"
                className="
                  group flex w-fit items-center gap-2
                  text-[clamp(9px,2vw,15px)]
                  text-[#C2C2C2]
                  transition-colors duration-300 ease-in-out
                  hover:text-[#F8DC9B]
                "
              >
                <i
                  className="
                    fa-solid fa-angles-right
                    -translate-x-3
                    text-[10px]
                    opacity-0
                    transition-all duration-300 ease-in-out
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    -translate-x-2
                    transition-transform duration-300 ease-in-out
                    group-hover:translate-x-0
                  "
                >
                  +91-8826418355
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:care@sariyadesigns.com"
                className="
                  group flex w-fit max-w-full items-center gap-2
                  text-[clamp(9px,2vw,15px)]
                  text-[#C2C2C2]
                  transition-colors duration-300 ease-in-out
                  hover:text-[#F8DC9B]
                "
              >
                <i
                  className="
                    fa-solid fa-angles-right
                    shrink-0
                    -translate-x-3
                    text-[10px]
                    opacity-0
                    transition-all duration-300 ease-in-out
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    break-all
                    -translate-x-2
                    transition-transform duration-300 ease-in-out
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
        <div className="mt-12 h-px w-full bg-white/20" />

        {/* ================= BOTTOM ================= */}
        <div
          className="
            flex
            flex-col
            gap-8
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* ================= SOCIAL ICONS ================= */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="
                flex
                h-9
                w-9
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
              <i className="fa-brands fa-facebook-f text-[27px]" />
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="
                flex
                h-9
                w-9
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
              <i className="fa-brands fa-instagram text-[27px]" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918826418355"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="
                flex
                h-9
                w-9
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
              <i className="fa-brands fa-whatsapp text-[27px]" />
            </a>
          </div>

          {/* ================= COPYRIGHT + LINKS ================= */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-8
              gap-y-3
              text-[clamp(9px,2vw,14px)]
              text-[#FFFFFF]
            "
          >
            <p>© 2026 Sariya Designs | All Rights Reserved.</p>

            {/* Terms */}
            <Link
              to="/terms"
              className="
                text-[clamp(9px,2vw,15px)]
                text-[#FFFFFF]
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
                text-[clamp(9px,2vw,15px)]
                text-[#FFFFFF]
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