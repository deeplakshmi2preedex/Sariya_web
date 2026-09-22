import Navbar from "../../../components/Navbar.jsx";
import Hero from "./hero.jsx";
import Intro from "./intro";
import AICard from "./AIcard.jsx";
import ERPcard from "./ERPcard.jsx";
import CTA from "./CTA.jsx";

function Workflow_automation() {
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
            <AICard />
          </div>

          {/* Card 2 */}
          <div className="sticky top-8 z-20 -mt-[20px]">
            <ERPcard />
          </div>
        </div>
      </section>

      {/* ================= MOBILE / TABLET ================= */}
      <section className="block lg:hidden">
        <AICard />
        <ERPcard />
      </section>

      <CTA />
    </>
  );
}

export default Workflow_automation;
