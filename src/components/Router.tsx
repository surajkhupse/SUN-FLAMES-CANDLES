import { Routes, Route } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import CollectionGrid from "../components/CollectionGrid";
import AboutUs from "../components/AboutUs";
import CTASection from "../components/CTASection";
import CategoryPage from "../components/CategoryPage";
import ContactPage from "../components/ContactPage";

export default function AppRouter() {
  return (
    <Routes>
      {/* Home / Collections */}
      <Route
        path="/"
        element={
          <>
            <HeroSection />
            <CollectionGrid />
            {/* <AboutUs /> */}
            <CTASection />
          </>
        }
      />
      <Route
        path="/collections"
        element={
          <>
            <HeroSection />
            <CollectionGrid />
            {/* <AboutUs /> */}
            <CTASection />
          </>
        }
      />

      {/* About */}
      <Route path="/about" element={<AboutUs />} />

      {/* Contact */}
      <Route path="/contact" element={<ContactPage />} />

      {/* Dynamic Category */}
      <Route path="/category/:name" element={<CategoryPage category={""} />} />

      {/* Fallback route (optional) */}
      <Route path="*" element={<HeroSection />} />
    </Routes>
  );
}
