import Navbar from "../../../components/Navbar.jsx";
import Hero from "./Hero";
import CustomIntro from "./Intro.jsx";
import ScalableCard from "./scableCard.jsx";
import SolutionsCard from "./SolutionsCard.jsx";
import UIDesignCard from "./UIDesignCard.jsx";
import SupportCard from "./SupportCard.jsx";
import CTA from "../../../components/contact.jsx";

function CustomDevelopment() {
  return (
    <>
      <div className="home-shell">
        <Navbar />

        <main>
          <Hero />
        </main>
      </div>

      <CustomIntro />

      {/* ================= STACKING CARDS ================= */}
      <section className="relative hidden lg:block">
        <div className="relative">
          {/* Card 1 */}
          <div className="sticky top-8 z-10">
            <ScalableCard />
          </div>

          {/* Card 2 */}
          <div className="sticky top-8 z-20 -mt-[20px]">
            <SolutionsCard />
          </div>

          {/* Card 3 */}
          <div className="sticky top-8 z-30 -mt-[20px]">
            <UIDesignCard />
          </div>

          {/* Card 4 */}
          <div className="sticky top-8 z-40 -mt-[20px]">
            <SupportCard />
          </div>
        </div>
      </section>

      {/* ================= MOBILE / TABLET ================= */}
      <section className="block lg:hidden">
        <ScalableCard />
        <SolutionsCard />
        <UIDesignCard />
        <SupportCard />
      </section>

      <CTA />
    </>
  );
}

export default CustomDevelopment;
