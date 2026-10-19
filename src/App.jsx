
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About.jsx";
import Divisions from "./pages/Divisions.jsx";
import DivisionDetail from "./pages/DivisonDetail.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";

import OfferingOverview from "./pages/OfferingOverview.jsx";
import OfferingDetail from "./pages/OfferingDetail.jsx";

import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

function App() {
  return (
    <BrowserRouter basename="/Lne-Technology">
      <Navbar />

      <Routes>
        {/* EXISTING PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route
          path="/divisions/:divisionName"
          element={<DivisionDetail />}
        />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

        {/* SERVICES */}
        <Route
          path="/services"
          element={<OfferingOverview groupKey="services" />}
        />
        <Route
          path="/services/:slug"
          element={<OfferingDetail groupKey="services" />}
        />

        {/* SOLUTIONS */}
        <Route
          path="/solutions"
          element={<OfferingOverview groupKey="solutions" />}
        />
        <Route
          path="/solutions/:slug"
          element={<OfferingDetail groupKey="solutions" />}
        />

        {/* DISCIPLINES */}
        <Route
          path="/disciplines"
          element={<OfferingOverview groupKey="disciplines" />}
        />
        <Route
          path="/disciplines/:slug"
          element={<OfferingDetail groupKey="disciplines" />}
        />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
