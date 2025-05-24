import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorkHoursSection from "@/components/WorkHoursSection";
import GallerySection from "@/components/GallerySection";
import CertificationsSection from "@/components/CertificationsSection";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet"; // Import Helmet

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Instalator Pro - Servicii Instalații Sanitare Baia Mare</title>
        <meta name="description" content="Servicii profesionale de instalații sanitare, montaj centrale termice și reparații rapide în Baia Mare." />
        <link rel="canonical" href="https://instalatiisanitarepro.ro/" />
        {/* You can also manage Open Graph (OG) tags and other meta tags here */}
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <GallerySection />
        <TestimonialsSection />
        <CertificationsSection />
        <WorkHoursSection />
        <MapSection />
        <CallToAction />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
