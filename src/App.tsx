import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import CollectionGrid from "./components/CollectionGrid";
import AboutUs from "./components/AboutUs";
import CTASection from "./components/CTASection";
// (Import other components like CollectionGrid, AboutUs, CTASection)

export default function App() {
  return (
  <div className="flex flex-col min-h-screen" style={{ background: '#FDF8FA' }}>
      <Header />
      <main className="flex flex-col gap-20 px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-20 flex-grow">
        <HeroSection />
        <CollectionGrid />
        <AboutUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
