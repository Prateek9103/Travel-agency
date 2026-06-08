import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Destinations from "../components/Destinations";
import Stats from "../components/Stats";
import TourPackages from "../components/TourPackages";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <Stats />
      <TourPackages />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default Home;