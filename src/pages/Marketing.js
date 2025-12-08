import MarketingSection from "../components/marketing/MarketingSection";
import MarketingEcommerce from "../components/marketing/MarketingEcommerce";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MarketingCards from "../components/marketing/MarketingCards";
import MarketingIntro from "../components/marketing/MarketingIntro";
import WhyRightShift from "../components/marketing/WhyRightShift";
import ContactForm from "../components/home/ContactForm";
import "../scss/OnlineStores.scss";
import { initSmoothScroll } from "../utils/lenis";
import ScreenshotsSection from "../components/design/ScreenshotsSection";
import MobileHeader from "../components/MobileHeader";
import { useMobile } from "../hooks/useMobile";

export default function Design() {
  const lenis = initSmoothScroll();
  const isMobile = useMobile();

  return (
    <div className="online-stores">
      {isMobile ? <MobileHeader /> : <Header />}
      <MarketingIntro />
      <MarketingCards />
      <MarketingEcommerce />
      <MarketingSection />
      <ScreenshotsSection />
      <ContactForm />
      <WhyRightShift />
      <Footer />
    </div>
  );
}
