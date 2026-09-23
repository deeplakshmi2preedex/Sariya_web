import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="
        w-full
        border-t
        border-white/5
        bg-black
        py-[clamp(2.5rem,6vw,4rem)]
        mb-[clamp(2rem,5vw,3rem)]
      "
    >
      <div
        className="
          page-width
          w-full
          max-w-full
          px-[clamp(1rem,4vw,3rem)]
          text-center
        "
      >
        {/* ================= LOGO ================= */}
        <p
          className="
            text-[clamp(1.5625rem,4vw,2.1875rem)]
            font-bold
            leading-none
            text-white
          "
        >
          sariya<span className="text-blue-400">.</span>
        </p>

        {/* ================= HEADING ================= */}
        <h2
          className="
            mx-auto
            mt-[clamp(3rem,8vw,5rem)]
            w-full
            max-w-full
            break-words
            text-[clamp(1.375rem,4vw,2.5rem)]
            font-semibold
            leading-[1.2]
            tracking-[clamp(0.02em,0.1vw,0.094em)]
            text-white
            min-[1025px]:whitespace-nowrap
          "
        >
          Contact us to discuss your project
        </h2>

        {/* ================= PARAGRAPH ================= */}
        <p
          className="
            mx-auto
            mt-[clamp(0.75rem,1.5vw,1rem)]
            w-full
            max-w-[70rem]
            break-words
            text-[clamp(0.875rem,1.6vw,1rem)]
            font-normal
            leading-[1.5]
            tracking-[clamp(0.01em,0.02vw,0.0125em)]
            text-[#BCC7DB]
            min-[1025px]:whitespace-nowrap
          "
        >
          Whether you're looking to automate a single workflow or build a custom
          ERP, our technical auditors are ready to find your efficiency gaps.
        </p>

        {/* ================= BUTTON ================= */}
        <div
          className="
            mt-[clamp(1.5rem,3vw,1.75rem)]
            flex
            w-full
            justify-center
          "
        >
          <a
            href="/contact"
            className="
              inline-flex
              max-w-full
              items-center
              justify-center
              gap-[clamp(0.375rem,0.7vw,0.5rem)]
              rounded-[clamp(0.625rem,1.2vw,0.75rem)]
              bg-white
              px-[clamp(1rem,2.5vw,1.25rem)]
              py-[clamp(0.625rem,1.2vw,0.75rem)]
              text-[clamp(0.75rem,1.2vw,1rem)]
              font-bold
              leading-none
              whitespace-nowrap
              text-black
              transition-all
              duration-300
              ease-out
              hover:scale-105
              hover:bg-white/90
              active:scale-95
            "
          >
            <span>Get Started</span>

            <ArrowUpRight
              className="
                h-[clamp(0.8rem,1.3vw,0.9375rem)]
                w-[clamp(0.8rem,1.3vw,0.9375rem)]
                shrink-0
              "
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  );
}