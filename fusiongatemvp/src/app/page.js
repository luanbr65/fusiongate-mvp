import Navbar from "@/components/landing/Navbar/Navbar";
import Hero from "@/components/landing/Hero/Hero";
import TrustStrip from "@/components/landing/TrustStrip/TrustStrip";
import Features from "@/components/landing/Features/Features";
import Metrics from "@/components/landing/Metrics/Metrics";
import HowItWorks from "@/components/landing/HowItWorks/HowItWorks";
import Testimonials from "@/components/landing/Testimonials/Testimonials";
import Pricing from "@/components/landing/Pricing/Pricing";
import FAQ from "@/components/landing/FAQ/FAQ";
import FinalCTA from "@/components/landing/FinalCTA/FinalCTA";
import Footer from "@/components/landing/Footer/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <Metrics />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
