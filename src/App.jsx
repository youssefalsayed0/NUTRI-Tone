import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import Services from "./components/Services/Services";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import 'mouse-follower/src/scss/index.scss';  // Import the MouseFollower styles



// Create the router
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "services", element: <Services /> },
      { path: "contact-us", element: <ContactUs /> },
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
