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
  "We choose the stack around the project, using modern frontend, backend, database and cloud technologies that fit the product.",
  "Yes. We can extend, integrate with, or rebuild around existing platforms when that is the best option.",
  "AI can reduce repetitive work, improve decision-making and create faster customer experiences when applied to the right business process.",
  "Workflow automation connects repetitive steps so routine work can happen with less manual effort.",
  "The finished code and project deliverables are handed over according to the agreed project terms.",
  "Timeline depends on the scope, features and integrations. We define milestones before development starts.",
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-black px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1060px]">
        <div className="space-y-3">
          {questions.map((question, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={question} className="faq-panel overflow-hidden rounded-xl">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-4 py-4 text-left text-[15px] text-neutral-100 md:px-5 md:py-[17px] md:text-[16px]"
                >
                  <span className="w-3 shrink-0 text-lg leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                  <span>{question}</span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-12 pb-5 text-sm leading-6 text-neutral-400">
                      {answers[index]}
                    </p>
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