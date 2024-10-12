import AboutUsSection from "../AboutUsSection/AboutUsSection";
import Divider from "../Divider/Divider";
import LandingSection from "../LandingSection/LandingSection";

import Splash from "../Splash/Splash";

export default function Home() {
  return (
    <>
      <main>
        {/* <Splash /> */}
        <LandingSection />
        <AboutUsSection />
        <Divider/>
      </main>
    </>
  );
}
