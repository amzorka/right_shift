import CorporativesSection from "../components/corporative-sites/CorporativesSection";
import CorporativesEcommerce from "../components/corporative-sites/CorporativesEcommerce";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CorporativesCards from "../components/corporative-sites/CorporativesCards";
import CorporativesIntro from "../components/corporative-sites/CorporativesIntro";
import WhyRightShift from "../components/online-stores/WhyRightShift";
import ContactForm from "../components/home/ContactForm";
import "../scss/OnlineStores.scss";
import { initSmoothScroll } from "../utils/lenis";
import { useMobile } from "../hooks/useMobile";
import MobileHeader from "../components/MobileHeader";

export default function CorporativeSites() {
  const lenis = initSmoothScroll();
  const isMobile = useMobile();

  return (
    <div className="online-stores">
      {isMobile ? <MobileHeader /> : <Header />}
      <CorporativesIntro />
      <CorporativesCards />
      <CorporativesEcommerce />
      <CorporativesSection />
      <ContactForm />
      <WhyRightShift />
      <Footer />
    </div>
  );
}
