import Navbar from "../../../components/Navbar.jsx";
import Hero from "./Hero";
import CustomCard from "./customCard";
import PlateformCard from "./plateformCard.jsx";
import WorkflowCard from "./workflowCard.jsx";
import CTA from "./contact.jsx";

export default function ServicePage() {
  return (
    <>
      <div className="home-shell">
        <Navbar />

        <main>
          <Hero />
        </main>
      </div>
      <CustomCard />
      <PlateformCard />
      <WorkflowCard />
      <CTA />
    </>
  );
}
