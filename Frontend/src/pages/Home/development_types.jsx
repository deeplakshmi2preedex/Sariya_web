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
    <section
      id="services"
      className="
        w-full
        overflow-hidden
        py-[clamp(40px,5vw,80px)]
      "
    >
      <div
        className="
          container-page
          w-full
          px-[clamp(16px,4vw,60px)]
        "
      >
        {/* ================= HEADER ================= */}

        <div className="text-center">
          <h2
            className="
              text-[clamp(2rem,3.5vw,3.125rem)]
              font-semibold
              leading-[1.2]
              tracking-[-0.02em]
              text-white
            "
          >
            Types Of Development
          </h2>

          <p
            className="
              mx-auto
              mt-[clamp(8px,1vw,12px)]
              max-w-[700px]
              text-[clamp(0.75rem,1.2vw,1rem)]
              font-normal
              leading-[1.5]
              text-[#BCC7DB]
            "
          >
            We bridge the gap between where you are and where you need to be.
          </p>
        </div>

        {/* ================= SERVICE CARDS ================= */}

        <div
          className="
            mt-[clamp(28px,3.5vw,36px)]
            grid
            grid-cols-1
            gap-[clamp(20px,3vw,48px)]
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map(
            ({ icon: Icon, eyebrow, title, body, items, tone }) => (
              <article
                key={title}
                className="
                  flex
                  min-w-0
                  w-full
                  flex-col
                  rounded-xl
                  border
                  border-black/10
                  bg-white
                  p-[clamp(22px,3vw,40px)]
                  text-black
                  min-h-[auto]
                  lg:min-h-[650px]
                "
              >
                {/* ================= ICON ================= */}

                <div
                  className={`
                    mb-[clamp(20px,2.5vw,28px)]
                    flex
                    h-[clamp(48px,4vw,60px)]
                    w-[clamp(48px,4vw,60px)]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    ${
                      tone === "blue"
                        ? "bg-blue-50 text-blue-600"
                        : tone === "purple"
                        ? "bg-purple-50 text-purple-600"
                        : "bg-emerald-50 text-emerald-600"
                    }
                  `}
                >
                  {Icon === "gears" ? (
                    <i
                      className="
                        fa-solid
                        fa-gears
                        text-[clamp(18px,1.8vw,20px)]
                      "
                    ></i>
                  ) : (
                    <Icon
                      size="clamp(24px,2.2vw,30px)"
                    />
                  )}
                </div>

                {/* ================= EYEBROW ================= */}

                <p
                  className="
                    text-[clamp(0.8125rem,1vw,1rem)]
                    font-bold
                    leading-[1.6]
                    tracking-[clamp(0.04em,0.1vw,0.094em)]
                    text-black
                  "
                >
                  {eyebrow}
                </p>

                {/* ================= TITLE ================= */}

                <h3
                  className="
                    mt-[clamp(24px,3vw,40px)]
                    mb-[clamp(22px,3vw,40px)]
                    text-[clamp(1rem,2vw,1.375rem)]
                    font-semibold
                    leading-[1.5]
                    tracking-[clamp(0.03em,0.08vw,0.069em)]
                    text-[#082F7B]
                  "
                >
                  {title}
                </h3>

                {/* ================= BODY ================= */}

                <p
                  className="
                    mb-[clamp(28px,3.5vw,48px)]
                    text-[clamp(0.875rem,1vw,1rem)]
                    font-normal
                    leading-[1.5]
                    tracking-[clamp(0.02em,0.06vw,0.075em)]
                    text-[#4D5A6E]
                  "
                >
                  {body}
                </p>

                {/* ================= FEATURES ================= */}

                <ul
                  className="
                    mt-auto
                    space-y-[clamp(8px,1vw,10px)]
                  "
                >
                  {items.map((item) => (
                    <li
                      key={item}
                      className="
                        flex
                        min-w-0
                        items-center
                        gap-[clamp(10px,1vw,12px)]
                        text-[clamp(0.875rem,1vw,1rem)]
                        font-bold
                        leading-[1.4]
                        text-[#505967]
                      "
                    >
                      <span
                        className="
                          flex
                          h-4
                          w-4
                          shrink-0
                          items-center
                          justify-center
                        "
                      >
                        <i
                          className="
                            fa-regular
                            fa-circle-check
                            text-blue-700
                          "
                        ></i>
                      </span>

                      <span className="min-w-0">
                        {item}
                      </span>
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