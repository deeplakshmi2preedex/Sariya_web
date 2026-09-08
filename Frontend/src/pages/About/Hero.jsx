export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg relative flex min-h-[620px] items-center overflow-hidden border-b border-white/5"
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="page-width relative z-10 pt-20">
        <h1 className="hero-title max-w-4xl text-6xl font-semibold leading-none sm:text-7xl md:text-8xl lg:text-[104px]">
          About Us
        </h1>
      </div>
    </section>
  );
}
