import { Bot, Code2, Workflow } from "lucide-react";

const services = [
  {
    icon: Code2,
    eyebrow: "Make Shopify, Webflow, or WordPress do more",
    title: "Stop juggling 10 different tools.",
    body: "All your company needs designed in one software that does it all.",
    items: ["Scalable Web Apps", "Custom Dashboards", "Database Systems"],
    tone: "blue",
  },
  {
    icon: Bot,
    eyebrow: "Platform Mastery",
    title: 'We add the "missing features" you need on existing platforms.',
    body: "Don't have to start over on a new system.",
    items: ["Custom System Logic", "Web Studio Pro", "Management ERP"],
    tone: "purple",
  },
  {
    icon: Workflow,
    eyebrow: "Workflow Development",
    title: "Let AI and bots handle the boring stuff.",
    body: "Your team gets back to growing your business.",
    items: ["AI Agent Integration", "API Connections", "CRM & ERP Systems"],
    tone: "green",
  },
];

export default function DevelopmentTypes() {
  return (
    <section id="services" className="pb-24">
      <div className="container-page">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Types Of Development</h2>
          <p className="mt-2 text-[10px] text-white/45">
            We bridge the gap between where you are and where you need to be.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {services.map(({ icon: Icon, eyebrow, title, body, items, tone }) => (
            <article
              key={title}
              className="min-h-[330px] rounded-lg border border-black/10 bg-white p-5 text-black"
            >
              <div
                className={`mb-7 flex h-8 w-8 items-center justify-center rounded-full ${
                  tone === "blue" ? "bg-blue-50 text-blue-600" :
                  tone === "purple" ? "bg-purple-50 text-purple-600" :
                  "bg-emerald-50 text-emerald-600"
                }`}
              >
                <Icon size={14} />
              </div>
              <p className="text-[8px] font-semibold text-black/60">{eyebrow}</p>
              <h3 className="mt-5 text-xl font-semibold leading-tight">{title}</h3>
              <p className="mt-4 text-[10px] leading-5 text-black/50">{body}</p>

              <ul className="mt-6 space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[9px] text-black/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
