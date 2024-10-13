import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp"
import icon from "../../assets/images/icon.webp"
import Overlay from "../Overlay/Overlay";
import Marquee from "../Marquee/Marquee";

export default function LandingSection() {
  return (
  <>
 <section className=" landing bg-dark vh-100 main-p position-relative   overflow-hidden">
  <Overlay/>
  <div className="container h-100 position-relative">
    <img src={icon} alt="icon"  className="position-absolute icon "/>
    <div className="row h-100 align-items-center position-relative">
      <div className="col-lg-12 z-1">
      <h1 className="display-3 mb-3">NUTRI-TONE</h1>
      <h4 data-cursor-text="🚀" >MAKE DIET EASY</h4>
      <Link type="button" to="/contact-us" className=" rounded-0 text-uppercase position-relative mt-5">get started today</Link>
      </div>
      <div className="col-lg-10 image">
          <img src={logo} alt="logo"  className="img-fluid position-relative z-1"/>
      </div>
    </div>
  </div>
  <Marquee/>
</section>
  </>
  )
}
