import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import Loader from "./components/Loader/Loader";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import Services from "./components/Services/Services";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";



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

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}
