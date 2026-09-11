import { useState } from "react";

const questions = [
  "What is your core tech stack for custom apps?",
  "Do you work with existing platforms like Shopify or Wix?",
  "How does your AI development help my business?",
  'What exactly is "Workflow Automation"?',
  "Who owns the code once the project is finished?",
  "How long does a typical project take?",
];

const answers = [
  "We specialise in high-performance, scalable stacks. For the front-end, we primarily use React and Next.js with Tailwind CSS. Our back-end builds typically leverage Node.js (Express), Python (Django), or PHP, supported by robust databases like PostgreSQL, MySQL, and MongoDB.",

  `Yes. Our Platform Development team specialises in extending the logic of Shopify, Wix Studio, Webflow, and WordPress. We don't just "build sites"—we add the "missing features" through custom API integrations and advanced logic that these platforms don't offer out-of-the-box.`,

  "We build AI Agents and Bots designed to handle repetitive, low-value cognitive tasks. This includes automated lead qualification, customer support routing, and complex data extraction that allows your team to focus on high-level growth strategy rather than manual entry.",

  `Workflow automation is the process of connecting your disparate tools (CRM, ERP, Billing, etc.) into a single, cohesive engine. We eliminate the need for manual data movement between apps, ensuring your business runs on "autopilot" with 100% data integrity.`,

  "You do. One of our core pillars is Ownership. Unlike SaaS companies that charge you a monthly fee to access your own workflows, Sariya builds proprietary assets. You own the IP, the source code, and the underlying data systems unless agreed otherwise.",

  "Timelines vary depending on complexity. Small workflow integrations can take 2–4 weeks, while full-scale custom ERP or platform builds typically range from 3–6 months. We follow a 4-step process: Audit, Strategy, Development, and Implementation.",
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-black px-5 py-10 md:px-8 md:py-18">
      <div className="mx-21">
        {/* FAQ LIST */}
        <div className="flex flex-col gap-5">
          {questions.map((question, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={question} className="flex flex-col gap-0">
                {/* QUESTION BOX */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className={`
                    group
                    flex
                    w-full
                    items-center
                    gap-4
                    rounded-2xl
                    bg-[#1C1C1C]
                    px-5
                    py-5
                    text-left
                    text-[clamp(18px,4vw,25px)]
                    text-white
                    transition-all
                    duration-300
                    ease-out
                    hover:bg-[#F57A7A]
                    md:px-6
                    md:py-6
                  `}
                >
                  {/* PLUS / MINUS */}
                  <span
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      text-xl
                      leading-none
                      transition-transform
                      duration-300
                    "
                  >
                    {isOpen ? "−" : "+"}
                  </span>

                  {/* QUESTION */}
                  <span>{question}</span>
                </button>

                {/* ANSWER BOX */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className="
                        rounded-2xl
                        border
                        border-gray-700
                        bg-black
                        px-5
                        py-5
                        shadow-[0_0_20px_rgba(128,128,128,0.15)]
                        md:px-6
                        md:py-6
                      "
                    >
                      <p
                        className="
                          text-[clamp(14px,2vw,16px)]
                          leading-6
                          text-[#BCC7DB]
                        "
                      >
                        {answers[index]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
