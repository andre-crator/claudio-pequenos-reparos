import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white selection:bg-primary/20 selection:text-primary">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <GallerySection />
        <FAQSection />
        <BlogSection />
        <BookingSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
