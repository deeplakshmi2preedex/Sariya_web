export default function CTA() {
  return (
    <section id="contact" className="bg-black px-6 py-16 text-center md:py-20">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-16 text-[21px] font-bold">
          sariya<span className="text-blue-500">.</span>
        </div>

        <h2 className="text-[24px] font-bold tracking-tight md:text-[28px]">
          Contact us to discuss your project
        </h2>

        <p className="mx-auto mt-3 max-w-[780px] text-[9px] leading-5 text-sky-100/80 md:text-[11px]">
          Whether you're looking to automate a single workflow or build a custom ERP,
          our technical auditors are ready to find your efficiency gaps.
        </p>

        <a
          href="mailto:care@sariyadesigns.com"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[10px] font-semibold text-black transition hover:scale-105"
        >
          Get Started
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}
