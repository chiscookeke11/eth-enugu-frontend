import AboutSection from "@/components/ui/AboutSection";
import Banner2 from "@/components/ui/Banner2";
import GallerySection from "@/components/ui/GallerySection";
import ScrollingText from "@/components/ui/Scrolling-text";
import SpotLight from "@/components/ui/Spotlight";
import Testimonials from "@/components/ui/Testimonials";
import HomeHero from "@/components/ui/hero";
import PartnerSponsor from "@/components/ui/partner-sponsor";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutSection />

      <SpotLight />

      <GallerySection />
      <Testimonials />

      <Banner2
        title="Mentor/Speak at EthEnugu ‘26"
        content="Apply to mentor talents at the ETH Enugu Conference and make lasting impacts in the Southeast tech ecosystem."
      />
      <PartnerSponsor />
      <ScrollingText />
    </>
  );
}
