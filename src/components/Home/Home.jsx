import AboutUsSection from "../AboutUsSection/AboutUsSection";
import Divider from "../Divider/Divider";
import LandingSection from "../LandingSection/LandingSection";
import Plans from "../Plans/Plans";

import Splash from "../Splash/Splash";
import TeamSection from "../TeamSection/TeamSection";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <Splash />
        <LandingSection />
        <AboutUsSection />
        <Divider/>
        <TeamSection/>
        <Testimonials/>
        <Plans/>
      </main>
    </>
  );
}
