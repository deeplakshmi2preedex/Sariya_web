import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 bg-black py-10 mb-12"
    >
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
            max-w-[1180px]
            whitespace-normal
            text-[clamp(14px,1.6vw,16px)]
            font-normal
            leading-[1.5]
            tracking-[1.2px]
            text-[#BCC7DB]
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
