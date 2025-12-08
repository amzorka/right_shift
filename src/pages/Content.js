import ContentSection from "../components/content/ContentSection";
import ContentEcommerce from "../components/content/ContentEcommerce";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContentCards from "../components/content/ContentCards";
import ContentIntro from "../components/content/ContentIntro";
import WhyRightShift from "../components/design/WhyRightShift";
import ContactForm from "../components/home/ContactForm";
import "../scss/OnlineStores.scss";
import { initSmoothScroll } from "../utils/lenis";
import { useMobile } from "../hooks/useMobile";
import MobileHeader from "../components/MobileHeader";

export default function Content() {
  const lenis = initSmoothScroll();
  const isMobile = useMobile();

  return (
    <div className="online-stores">
      {isMobile ? <MobileHeader /> : <Header />}
      <ContentIntro />
      <ContentCards />
      <ContentEcommerce />
      <ContentSection />
      <ContactForm />
      <WhyRightShift />
      <Footer />
    </div>
  );
}
