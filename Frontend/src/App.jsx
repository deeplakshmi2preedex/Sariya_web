import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import FAQ from "./pages/FAQ/FAQ.jsx";
import Services from "./pages/Services/Services.jsx";

import CustomDevelopment from "./pages/Services/Custom_Development/custom_development.jsx";
import PlatformDevelopment from "./pages/Services/Plateform_Development/plateform_development.jsx";
import WorkflowAutomation from "./pages/Services/Workflow_Automation/workflow_automation.jsx";

import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <MainLayout>
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />

        {/* Individual service pages */}
        <Route
          path="/services/custom-development"
          element={<CustomDevelopment />}
        />

        <Route
          path="/services/platform-development"
          element={<PlatformDevelopment />}
        />

        <Route
          path="/services/workflow-automation"
          element={<WorkflowAutomation />}
        />
      </Routes>
    </MainLayout>
  );
}

export default App;