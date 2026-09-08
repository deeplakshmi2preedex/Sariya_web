import { Database, Rocket, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Database,
    title: "Fragmented Data",
    text: "Your information is scattered across tools, email and manual work. Get it back into one source of truth.",
    color: "text-red-400",
  },
  {
    icon: Rocket,
    title: "Manual Burnout",
    text: "Your team spends 80% of their day on repetitive tasks instead of building real growth.",
    color: "text-orange-400",
  },
  {
    icon: TrendingUp,
    title: "Ceiling on Growth",
    text: "Your team hits limits because your current setup wasn't built for a growing operation.",
    color: "text-violet-400",
  },
];

export default function Problems() {
  return (
    <section id="about" className="py-24">
      <div className="container-page">

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[22px] font-semibold">
            When "Ready-Made" Isn't Enough
          </h2>

          <p className="mt-3 text-[14px] leading-5 text-white/60">
            Matching tells your story, but development solves your problems.
            If you're feeling these pains, you need a custom solution.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {problems.map(({ icon: Icon, title, text, color }) => (
            <article
              key={title}
              className="rounded-lg border border-white/10 bg-[#101011] p-5"
            >
              <div
                className={`mb-7 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ${color}`}
              >
                <Icon size={14} />
              </div>

              <h3 className="text-[22px] font-medium">
                {title}
              </h3>

              <p className="mt-3 text-[14px] font-normal leading-5 text-white/45">
                {text}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}