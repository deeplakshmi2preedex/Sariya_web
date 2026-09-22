import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/5 bg-black py-10 mb-12">
      <div className="page-width text-center">
        {/* Logo */}
        <p className="text-[clamp(25px,4vw,35px)] font-bold text-white">
          sariya<span className="text-blue-400">.</span>
        </p>

        {/* Heading */}
        <h2
          className="
            mx-auto
            mt-20
            w-full
            whitespace-normal
            text-[clamp(22px,4vw,40px)]
            font-semibold
            leading-tight
            tracking-[1.5px]
            text-white
            lg:whitespace-nowrap
          "
        >
          Contact us to discuss your project
        </h2>

        {/* Paragraph */}
        <p
          className="
            mx-auto
            mt-4
            w-full
            whitespace-normal
            text-[clamp(13px,1.6vw,16px)]
            font-normal
            leading-6
            tracking-[0.2px]
            text-[#BCC7DB]
            lg:whitespace-nowrap
          "
        >
          Whether you're looking to automate a single workflow or build a custom
          ERP, our technical auditors are ready to find your efficiency gaps.
        </p>

        {/* Button */}
        <div className="mt-7 text-center">
          <a
            href="/contact"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-4
              py-3
              text-[clamp(9px,2vw,16px)]
              font-bold
              text-black
              transition-all
              duration-300
              ease-out
              hover:scale-105
            "
          >
            Get Started
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
