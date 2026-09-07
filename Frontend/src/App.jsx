import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import FAQ from "./pages/FAQ/FAQ.jsx";
import Services from "./pages/Services/Services.jsx";
import custom_development from "./pages/Services/Custom_Development/custom_development.jsx";
import plateform_development from "./pages/Services/Plateform_Development/plateform_development.jsx";
import workflow_automation from "./pages/Services/Workflow_Automation/workflow_automation.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <MainLayout>
      <Routes>
        {/* main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />

        {/* service page */}
        <Route path="/services" element={<Services />} />

        {/* individual service page */}
        <Route
          path="/services/custom-development"
          element={<custom-development />}
        />

        <Route
          path="/services/platform-development"
          element={<platform-development />}
        />

        <Route
          path="/services/workflow-automation"
          element={<workflow-automation />}
        />
      </Routes>
    </MainLayout>
  );
}

export default App;
