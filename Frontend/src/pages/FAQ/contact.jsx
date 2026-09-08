export default function CTA() {
  return (
    <section id="contact" className="border-t border-white/10 bg-black px-5 py-12 md:py-14">
      <div className="mx-auto max-w-[850px] text-center">
        <div className="mb-14 text-2xl font-bold tracking-tight">
          sariya<span className="text-neutral-500">.</span>
        </div>

        <h2 className="text-2xl font-bold tracking-tight md:text-[28px]">
          Contact us to discuss your project
        </h2>

        <p className="mx-auto mt-3 max-w-[760px] text-[10px] leading-5 text-sky-100/80 md:text-[11px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <a
          href="mailto:care@sariyadesigns.com"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[11px] font-semibold text-black transition hover:scale-105"
        >
          Get Started
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}