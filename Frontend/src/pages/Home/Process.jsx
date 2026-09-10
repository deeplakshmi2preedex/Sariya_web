import { ArrowUpRight, Search, Code2, FilePenLine } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "The Audit",
    text: `We will map your messy process to find the "efficiency leaks & bottlenecks".`,
  },
  {
    number: "02",
    icon: FilePenLine,
    title: "Blueprinting",
    text: "We design the architecture not just how it looks, but how it works.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    text: "Our experts build your tool using modern, scalable code that is clean & frictionless.",
  },
  {
    number: "04",
    icon: "person-chalkboard",
    title: "Implementation",
    text: "We train your team & migrate your data into the new system without disruption.",
  },
];

export default function Process() {
  return (
    <section className="pb-24">
      <div className="container-page">
        <div className="text-center">
          <h2 className="text-[clamp(30px,4.5vw,50px)] font-semibold text-[#ffffff]">
            Business On Autopilot In Just 4 Steps
          </h2>
        </div>

        <div className="mt-8 grid gap-5 p-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, icon: Icon, title, text }) => (
            <article
              key={number}
              className="min-h-[250px] min-w-[300px] rounded-xl border border-gray-500/30 bg-black p-5 shadow-[0_0_15px_rgba(156,163,175,0.15)] transition-colors duration-300 hover:bg-gray-800"
            >
              <div className="mt-5 text-[clamp(32px,4.2vw,60px)] text-[#414141]">
                {number}
              </div>

              <div className="mt-7 flex items-center gap-2 text-[clamp(15px,4.2vw,25px)] font-normal text-[#ffffff]">
                {Icon === "person-chalkboard" ? (
                  <span className="flex h-[30px] w-[30px] items-center justify-center">
                    <i className="fa-solid fa-person-chalkboard text-[24px] text-blue-400"></i>
                  </span>
                ) : (
                  <Icon size={30} className="text-blue-400" />
                )}

                <h3>{title}</h3>
              </div>

              <p className="mt-7 text-[clamp(10px,4vw,14px)] font-normal leading-[1.7] tracking-[1.2px] text-[#95A3B7]">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-7 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-[clamp(9px, 4vw, 16px)] font-bold text-black"
          >
            Get Started <ArrowUpRight size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}