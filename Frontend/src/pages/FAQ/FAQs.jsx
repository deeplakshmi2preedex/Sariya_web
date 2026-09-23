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
    <section
      id="faq"
      className="
        w-full
        overflow-hidden
        bg-black
        px-[clamp(1rem,4vw,3rem)]
        py-[clamp(2.5rem,6vw,5rem)]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[100rem]
        "
      >
        <div
          className="
            flex
            w-full
            flex-col
            gap-[clamp(0.75rem,1.5vw,1.25rem)]
          "
        >
          {questions.map((question, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={question} className="w-full min-w-0">
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className={`
                    group
                    flex
                    w-full
                    min-w-0
                    items-center
                    rounded-[clamp(0.875rem,2vw,1rem)]
                    px-[clamp(1rem,2.5vw,1.5rem)]
                    py-[clamp(1rem,2.5vw,1.5rem)]
                    text-left
                    text-[clamp(1rem,2.5vw,1.5625rem)]
                    font-normal
                    leading-[1.3]
                    text-white
                    transition-all
                    duration-300
                    ease-out
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#F57A7A]/50

                    ${
                      isOpen
                        ? "bg-[#F57A7A]"
                        : "bg-[#1C1C1C] hover:bg-[#F57A7A]"
                    }
                  `}
                >
                  {/* PLUS / MINUS */}
                  <span
                    className="
                      mr-[clamp(0.75rem,2vw,1rem)]
                      flex
                      h-[clamp(1.5rem,3vw,1.75rem)]
                      w-[clamp(1.5rem,3vw,1.75rem)]
                      shrink-0
                      items-center
                      justify-center
                      text-[clamp(1.25rem,2.5vw,1.5rem)]
                      font-light
                      leading-none
                      transition-transform
                      duration-300
                    "
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>

                  {/* QUESTION */}
                  <span
                    className="
                      min-w-0
                      flex-1
                      break-words
                    "
                  >
                    {question}
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  id={`faq-answer-${index}`}
                  className={`
                    grid
                    w-full
                    transition-[grid-template-rows,opacity]
                    duration-500
                    ease-in-out
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
                        mt-[clamp(0.5rem,1vw,0.75rem)]
                        w-full
                        rounded-[clamp(0.875rem,2vw,1rem)]
                        border
                        border-gray-700
                        bg-black
                        px-[clamp(1rem,2.5vw,1.5rem)]
                        py-[clamp(1rem,2.5vw,1.5rem)]
                        shadow-[0_0_20px_rgba(128,128,128,0.15)]
                      "
                    >
                      <p
                        className="
                          w-full
                          break-words
                          text-[clamp(0.8125rem,1.4vw,1rem)]
                          leading-[1.65]
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