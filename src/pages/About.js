import Footer from "../components/Footer";
import Header from "../components/Header";
import "../scss/About.scss";
import "../scss/OnlineStores.scss";
import { initSmoothScroll } from "../utils/lenis";
import { useMobile } from "../hooks/useMobile";
import MobileHeader from "../components/MobileHeader";
import AboutTeamSection from "../components/about/AboutTeamSection";
import AboutTeam from "../components/about/AboutTeam";
import AboutValuesSection from "../components/about/AboutValuesSection";
import AboutDirections from "../components/about/AboutDirections";
import AutographSection from "../components/about/AutographSection";
import AboutIntro from "../components/about/AboutIntro";

export default function About() {
  const isMobile = useMobile();
  const lenis = initSmoothScroll();

  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      <AboutIntro />
      <AboutTeamSection />
      <AboutTeam />
      <AboutValuesSection />
      <AboutDirections />
      <AutographSection />
      <Footer />
    </>
  );
}
