export default function Productivity() {
  return (
    <section className="pb-24">
      <div className="container-page">
        <div
          className="relative flex min-h-[360px] items-end overflow-hidden rounded-[24px] border border-white/10 bg-cover bg-center p-6 sm:p-8"
          style={{
            backgroundImage:
              "linear-gradient(0deg,rgba(0,0,0,.82),rgba(0,0,0,.08)),url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=85')",
          }}
        >
          <div>
            <p className="text-[10px] font-bold tracking-widest text-blue-300">AUTOMATION</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Employee Productivity</h2>
            <p className="mt-2 max-w-xl text-xs leading-5 text-white/60">
              Turn repetitive operations into dependable systems so your team can focus
              on higher-value work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
