import LandingsApproach from "../components/landings/LandingsApproach";
import LandingsEcommerce from "../components/landings/LandingsEcommerce";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import LandingsCards from "../components/landings/LandingsCards";
import LandingsIntro from "../components/landings/LandingsIntro";
import WhyRightShift from "../components/WhyRightShift";
import ContactForm from "../components/home/ContactForm";
import "../scss/OnlineStores.scss";
import { initSmoothScroll } from "../utils/lenis";
import { useMobile } from "../hooks/useMobile";

export default function Landings() {
  const lenis = initSmoothScroll();
  const isMobile = useMobile();

  return (
    <div className="online-stores">
      {isMobile ? <MobileHeader /> : <Header />}
      <LandingsIntro />
      <LandingsCards />
      <LandingsEcommerce />
      <LandingsApproach />
      <ContactForm />
      <WhyRightShift />
      <Footer />
    </div>
  );
}
