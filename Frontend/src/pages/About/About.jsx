import Hero from "./Hero.jsx";
import IntroSection from "./intro.jsx";
import SariyaStandard from "./standards.jsx";
import CTA from "../../components/contact.jsx";

function About() {
  return (
    <div>
      <>
        <div>
          <main>
            <Hero />
          </main>
        </div>

        <IntroSection />
        <SariyaStandard />
        <CTA />
      </>
    </div>
  );
}

export default About;
