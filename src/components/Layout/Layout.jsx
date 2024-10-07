import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import TopBar from "../TopBar/TopBar";

export default function Layout() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
