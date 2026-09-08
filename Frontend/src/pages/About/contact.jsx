import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/5 bg-black py-16 sm:py-20">
      <div className="page-width text-center">
        <p className="text-xl font-bold">
          sariya<span className="text-blue-400">.</span>
        </p>

        <h2 className="mx-auto mt-16 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Contact us to discuss your project
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[10px] leading-5 text-white/50 sm:text-xs">
          Whether you're looking to automate a single workflow or build a custom ERP,
          our technical auditors are ready to find your efficiency gaps.
        </p>

        <a
          href="mailto:care@sariyadesigns.com"
          className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-[10px] font-semibold text-black transition hover:bg-blue-100"
        >
          Get Started <ArrowUpRight size={13} />
        </a>
      </div>
    </section>
  );
}
