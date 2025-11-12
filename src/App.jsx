import NavbarTop from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import PromoStrip from "./components/PromoStrip.jsx";
import Services from "./components/Services.jsx";
import Locations from "./components/Locations.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Knowledge from "./components/Knowledge.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <NavbarTop />
      <Hero />
      <PromoStrip />
      <Services />
      {/* <Locations /> */}
      <Testimonials />
      <Knowledge />
      <Footer />
    </>
  );
}
