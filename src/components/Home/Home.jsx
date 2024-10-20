import AboutUsSection from "../AboutUsSection/AboutUsSection";
import CallToAction from "../CallToAction/CallToAction";
import Divider from "../Divider/Divider";
import LandingSection from "../LandingSection/LandingSection";
import Plans from "../Plans/Plans";
import PlansSlider from "../PlansSlider/PlansSlider";
import Splash from "../Splash/Splash";
import TeamSection from "../TeamSection/TeamSection";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        {/* <Splash /> */}
        <LandingSection />    
        <PlansSlider/>
        <AboutUsSection />
        <Divider/>
        <TeamSection/>
        <Testimonials/>
        <Plans/>
        <CallToAction/>
      </main>
    </>
  );
}
