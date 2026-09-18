import ServiceCard from "./ServiceCard";

import fullstackImage from "../assets/services/fullstack.jpg";
import backendImage from "../assets/services/backend.jpg";
import uiImage from "../assets/services/ui-design.jpg";
import legacyImage from "../assets/services/legacy.jpg";

const services = [
  {
    image: fullstackImage,
    imageTitle: "Scalable Full-Stack Frameworks",
    title: "Scalable Full-Stack Frameworks",
    description:
      "We build interactive, high-performance web applications using the industry's most robust ecosystem.",
    bulletsLeft: [
      "React/Next.js",
      "Node.js / Express",
    ],
    bulletsRight: [
      "Instant interactions and lightning-fast user experiences.",
      "Scalable backend logic to handle massive concurrent traffic.",
    ],
    buttonText: "Efficiency Audit",
    background: "#c77b5e",
  },

  {
    image: backendImage,
    imageTitle: "Robust Backend & Data Solutions",
    title: "Robust Backend & Data Solutions",
    description:
      "For complex business logic and secure data handling, we leverage Python's power combined with relational database integrity.",
    bulletsLeft: [
      "Python (Django)",
      "Postgres / MySQL",
    ],
    bulletsRight: [
      "Rapid development of secure and maintainable software.",
      "Relational data structures ensuring absolute data integrity.",
    ],
    buttonText: "Get Started",
    background: "#c8c8c8",
  },

  {
    image: uiImage,
    imageTitle: "UI Design & Data Persistence",
    title: "UI Design & Data Persistence",
    description:
      "Modern web development requires flexible data storage and highly responsive, pixel-perfect user interfaces.",
    bulletsLeft: [
      "Tailwind / Bootstrap",
      "MongoDB",
    ],
    bulletsRight: [
      "Rapid UI prototyping with professional aesthetics.",
      "NoSQL flexibility for dynamic, fast-evolving business data.",
    ],
    buttonText: "Start Building",
    background: "#ad52dc",
  },

  {
    image: legacyImage,
    imageTitle: "Core Standards & Legacy Support",
    title: "Core Standards & Legacy Support",
    description:
      "We combine time-tested web standards with modern PHP practices to maintain and scale essential business websites.",
    bulletsLeft: [
      "PHP / HTML5 / CSS3",
      "Legacy Integration",
    ],
    bulletsRight: [
      "The backbone of the web, optimized for SEO and speed.",
      "Connecting existing web assets to modern API layers.",
    ],
    buttonText: "Get Started",
    background: "#243be0",
  },
];

function Services() {
  return (
    <section className="bg-black px-6 pb-14">
      <div className="mx-auto max-w-[870px] space-y-9">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            imageTitle={service.imageTitle}
            title={service.title}
            description={service.description}
            bulletsLeft={service.bulletsLeft}
            bulletsRight={service.bulletsRight}
            buttonText={service.buttonText}
            background={service.background}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;