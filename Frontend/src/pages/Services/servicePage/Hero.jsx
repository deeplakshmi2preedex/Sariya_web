export default function Hero() {
  return (
    <section className="hero-section flex items-end px-6 pb-24 pt-32 md:px-10 md:pb-28">
      <div className="mx-auto w-full max-w-[1370px]">
        <div className="mb-7 h-[5px] w-[210px] bg-blue-500 md:w-[215px]" />

        <h1 className="text-[66px] font-bold leading-none tracking-[-0.055em] md:text-[100px] lg:text-[112px]">
          Services
        </h1>

        <p className="mt-6 max-w-[760px] text-[12px] leading-5 text-neutral-100 md:text-[14px]">
          Custom engineered solutions built to scale your business operations and remove manual bottlenecks.
        </p>
      </div>
    </section>
  );
}
