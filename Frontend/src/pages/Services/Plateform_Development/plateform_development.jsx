import Hero from "./hero";
import Intro from "./intro";
import ECommerceCard from "./eCommerceCard";
import DesignCard from "./designCard";
import CTA from "./CTA";
import Navbar from "../../../components/Navbar";

function PlatformDevelopment() {
  return (
    <>
      <div className="home-shell">
        <div className="pt-5 px-25">
          <Navbar />
        </div>

        <main>
          <Hero />
        </main>
      </div>
      <Intro />

      {/* ================= STACKING CARDS ================= */}
      <section className="relative hidden lg:block">
        <div className="relative">
          {/* Card 1 */}
          <div className="sticky top-8 z-10">
            <ECommerceCard />
          </div>

          {/* Card 2 */}
          <div className="sticky top-8 z-20 -mt-[20px]">
            <DesignCard />
          </div>
        </div>
      </section>

      {/* ================= MOBILE / TABLET ================= */}
      <section className="block lg:hidden">
        <ECommerceCard />
        <DesignCard />
      </section>

      <CTA />
    </>
  );
}

export default PlatformDevelopment;
