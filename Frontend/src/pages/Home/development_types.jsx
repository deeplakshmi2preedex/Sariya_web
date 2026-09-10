import { Code2, Rocket } from "lucide-react";

const services = [
  {
    icon: Code2,
    eyebrow: "Make Shopify, Webflow, or WordPress do more",
    title:
      "Stop juggling 10 different tools. Get all your company needs designed in one software that does it all.",
    body:
      "We build unique tools from scratch that fit your business perfectly, giving you every report, chart and invoices you need in one place.",
    items: ["Scalable Web Apps", "Custom Dashboards", "Database Systems"],
    tone: "blue",
  },
  {
    icon: Rocket,
    eyebrow: "Platform Mastery",
    title:
      'We add the "missing features" you need on existing platform so you don’t have to start over on a new system.',
    body:
      "Make Wix, Webflow, Shopify, Wordpress, Woocommerce and other platforms do things it wasn't born to do.",
    items: ["Shopify Custom Logic", "Web Studio Pro", "Woocommerce ERP"],
    tone: "purple",
  },
  {
    icon: "gears",
    eyebrow: "Workflow Development",
    title:
      "Let AI and bots handle the boring stuff so you can get back to growing your business.",
    body:
      "We build AI and bots to handle your boring, repetitive tasks so you can spend your time growing the business instead of managing it.",
    items: ["AI Agent Integration", "API Connections", "LMS & ERP Systems"],
    tone: "green",
  },
];

export default function DevelopmentTypes() {
  return (
    <section id="services" className="p-10">
      <div className="container-page">
        <div className="text-center">
          <h2 className="text-[clamp(32px,3.5vw,50px)] font-semibold">
            Types Of Development
          </h2>

          <p className="mt-2 text-[clamp(12px,1.2vw,16px)] text-[#BCC7DB]">
            We bridge the gap between where you are and where you need to be.
          </p>
        </div>

        <div className="mt-9 grid gap-12 md:grid-cols-3">
          {services.map(
            ({ icon: Icon, eyebrow, title, body, items, tone }) => (
              <article
                key={title}
                className="
                  min-h-[650px]
                  rounded-xl
                  border
                  border-black/10
                  bg-white
                  text-black
                  p-10
                "
              >
                <div
                  className={`mb-7 flex h-15 w-15 items-center justify-center rounded-full ${
                    tone === "blue"
                      ? "bg-blue-50 text-blue-600"
                      : tone === "purple"
                      ? "bg-purple-50 text-purple-600"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {Icon === "gears" ? (
                    <i className="fa-solid fa-gears text-[20px]"></i>
                  ) : (
                    <Icon size={30} />
                  )}
                </div>

                <p className="text-[clamp(14px,1vw,16px)] font-bold text-black leading-[2.5] tracking-[1.5]">
                  {eyebrow}
                </p>

                <h3 className="mt-10 mb-10 text-[clamp(16px,2vw,22px)] font-semibold leading-[1.5] tracking-[1.1px] text-[#082F7B]">
                  {title}
                </h3>

                <p className="mb-12 text-[clamp(14px,1vw,16px)] text-[#4D5A6E] leading-[1.5] tracking-[1.2px]">
                  {body}
                </p>

                <ul className="mt-6 space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[clamp(14px,1vw,16px)] text-[#505967] font-bold"
                    >
                      <span className="flex h-4 w-4 items-center justify-center rounded-full font-[10px]">
                        <i className="fa-regular fa-circle-check text-blue-700"></i>
                      </span>

                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}