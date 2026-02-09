import ApproachSection from "../components/online-stores/ApproachSection";
import EcommerceSection from "../components/online-stores/EcommerceSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import OnlineStoresCards from "../components/online-stores/OnlineStoresCards";
import OnlineStoresIntro from "../components/online-stores/OnlineStoresIntro";
import WhyRightShift from "../components/WhyRightShift";
import ContactForm from "../components/home/ContactForm";
import "../scss/OnlineStores.scss";
import { useMobile } from "../hooks/useMobile";

export default function OnlineStores() {
  const isMobile = useMobile();

  return (
    <div className="online-stores">
      {isMobile ? <MobileHeader /> : <Header />}
      <OnlineStoresIntro />
      <OnlineStoresCards />
      <EcommerceSection />
      <ApproachSection />
      <ContactForm />
      <WhyRightShift />
      <Footer />
    </div>
  );
}
