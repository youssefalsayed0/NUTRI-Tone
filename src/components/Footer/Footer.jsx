
import { Link } from "react-router-dom"
import icon from "../../assets/images/Ellipse-1.webp"
import logo from "../../assets/images/logo.webp"
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle"
import { useTranslation } from "react-i18next";
export default function Footer() {
  const {t} =   useTranslation();

  return (
    <>
    
    <footer className="position-relative pb-3 pt-5 ">
      <img src={icon} alt="icon" className="img-fluid position-absolute icon "  />
<div className="container">
  <div className="row gy-5">
    <div className="col-lg-5 position-relative fist ">
      <div className="image">
        <img src={logo} alt="logo"  className="img-fluid"  width={200}/> 
      </div>
      <h1>MAKE DIET EASY TO MAKE </h1>
      <AnimatedTitle text={t("main-title.footer")} title={""}/>
    </div>
    <div className="col-lg-4 second  px-4 ">
     <h2 className="title" >NUTRI-TONE</h2>
      <p className="text-white-50 my-5">Welcome to NUTRI-TONE! We are here to support and guide you.</p>
      <div className="contact">
        <p className="text-uppercase fw-bold m-0 "> call us any time</p>
  <h2 className="fw-bold" >
          <a href="tel:01069796878">01069796878</a>
  </h2>
      </div>

    </div>
    <div className="col-lg-3 px-4 third">
      <h6>OUR SERVICES</h6>
      <svg className="" xmlns="http://www.w3.org/2000/svg" width="35" height="10" viewBox="0 0 35 10" fill="none"><path d="M15.1107 0H10.1259L0.954102 9.06122H5.93894L15.1107 0Z" fill="#eefb13"></path><path d="M24.7416 0H19.7567L10.585 9.06122H15.5698L24.7416 0Z" fill="#eefb13"></path><path d="M34.3724 0H29.3833L20.2158 9.06122H25.1964L34.3724 0Z" fill="#eefb13"></path></svg>
      <ul className="list-unstyled mt-5">
        <li className="mt-3"><Link to="" className="text-white-50"> Lorem, ipsum dolor.</Link></li>
        <li className="mt-3"><Link to="" className="text-white-50"> Lorem, ipsum dolor.</Link></li>
        <li className="mt-3"><Link to="" className="text-white-50"> Lorem, ipsum dolor.</Link></li>
        <li className="mt-3"><Link to="" className="text-white-50"> Lorem, ipsum dolor.</Link></li>
        <li className="mt-3"><Link to="" className="text-white-50"> Lorem, ipsum dolor.</Link></li>
        <li className="mt-3"><Link to="" className="text-white-50"> Lorem, ipsum dolor.</Link></li>
      </ul>
    </div>
  </div>
  <div className="row copy  text-center text-lg-start gy-3 gy-lg-0 pt-3 ">
    <div className="col-lg-5"><p>Copy@ 2024 NUTRI-TONE. All rights reserved </p></div>
    <div className="col-lg-2 ">   
        <div className="social-icons d-flex justify-content-center  align-items-center">
                <a href="https://www.facebook.com/NUTRITONE1/ " target="_blank">
                    <i className="fa-brands fa-facebook-f fa-lg me-3" />
                </a>
                <a href="https://www.instagram.com/nutri_tone/"  target="_blank">
                    <i className="fa-brands fa-instagram fa-lg me-3" />
                </a>
               <a href="https://www.youtube.com/channel/UC-Ro9sXpKXdFjau5ww1dkRQ"  target="_blank">
                   <i className="fa-brands fa-youtube fa-lg me-3" />
               </a>
           <a href="https://www.tiktok.com/@nutri.tone?lang=en_official?lang=en"  target="_blank">
                   <i className="fa-brands fa-tiktok fa-lg " />
           </a>
              </div></div>
    <div className="col-lg-5 text-lg-end">
      <Link to='/privacy-policy'className="me-3">Privacy policy</Link>
      <Link to='/refund-&-policy'className="me-3">refund & policy</Link>
      <Link to='/terms-&-conditions'>terms & Conditions</Link>
    </div>
  </div>
</div>
    </footer>
    
    </>
  )
}
