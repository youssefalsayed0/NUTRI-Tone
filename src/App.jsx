import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import Terms from "./components/Terms/Terms";
import Refund from "./components/Refund/Refund";
import Privacy from "./components/Privacy/Privacy";
import Packages from "./components/Packages/Packages";
import Plans from "./components/Plans/Plans";
import PackageDetailsSection from "./components/PackageDetailsSection/ProductDetailsSection";
import ObesityPack from "./components/ObesityPack/ObesityPack";
import FamilyPack from "./components/FamilyPack/FamilyPack";
import SportsPack from "./components/SportsPack/SportsPack";
import KidsPack from "./components/KidsPack/KidsPack";
import PregnantPack from "./components/PregnantPack/PregnantPack";
import ClinicalPack from "./components/ClinicalPack/ClinicalPack";
import Bmi from "./components/Bmi/Bmi";
import Offers from "./components/Offers/Offers";



// Create the router
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "offers", element: <Offers/> },
      { path: "terms-&-conditions", element: <Terms /> },
      { path: "refund-&-policy", element: <Refund /> },
      { path: "privacy-policy", element: <Privacy /> },
      { path: "bmi", element: <Bmi /> },
      {
        path: "packages",
        element: <Packages />,
        children: [
          { path: "", element: <Plans/> },
          { path: "package-details", element: <PackageDetailsSection />,
            children: [
              { path: "", element: <ObesityPack /> },
              { path: "obesity&underweight", element: <ObesityPack /> },
              { path: "family-care", element: <FamilyPack /> },
              { path: "sports-nutrition", element: <SportsPack /> },
              { path: "kids-nutrition", element: <KidsPack /> },
              { path: "pregnant&lactation-nutrition", element: <PregnantPack /> },
              { path: "clinical-nutrition", element: <ClinicalPack /> },
            ],
          },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower({
    speed: 0.33,
});

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}
