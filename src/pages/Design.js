import DesignSection from "../components/design/DesignSection";
import DesignEcommerce from "../components/design/DesignEcommerce";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DesignCards from "../components/design/DesignCards";
import DesignIntro from "../components/design/DesignIntro";
import WhyRightShift from "../components/design/WhyRightShift";
import ContactForm from "../components/home/ContactForm";
import "../scss/OnlineStores.scss";
import { initSmoothScroll } from "../utils/lenis";
import ScreenshotsSection from "../components/design/ScreenshotsSection";
import { useMobile } from "../hooks/useMobile";
import MobileHeader from "../components/MobileHeader";

export default function Design() {
  const isMobile = useMobile();
  const lenis = initSmoothScroll();

  return (
    <div className="online-stores">
      {isMobile ? <MobileHeader /> : <Header />}
      <DesignIntro />
      <DesignCards />
      <DesignEcommerce />
      <DesignSection />
      <ScreenshotsSection />
      <ContactForm />
      <WhyRightShift />
      <Footer />
    </div>
  );
}
