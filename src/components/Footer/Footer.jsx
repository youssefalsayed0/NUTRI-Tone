
import { Link } from "react-router-dom"
import icon from "../../assets/images/Ellipse-1.webp"
import logo from "../../assets/images/logo.webp"
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle"
import { useTranslation } from "react-i18next";
export default function Footer() {
  const {t} =   useTranslation();

  return (
    <>
    
    <footer className="position-relative py-3 ">
      <img src={icon} alt="icon" className="img-fluid position-absolute icon "  />
<div className="container">
  <div className="row">
    <div className="col-lg-5 position-relative">
      <div className="image">
        <img src={logo} alt="logo"  className="img-fluid"  width={300}/>
      </div>
      <h1>MAKE DIET EASY TO MAKE </h1>
      <AnimatedTitle text={t("main-title.footer")} title={""}/>
    </div>
    <div className="col-lg-4"></div>
    <div className="col-lg-3">
      <h5>OUR SERVICES</h5>
      <svg className="mt-5" xmlns="http://www.w3.org/2000/svg" width="35" height="10" viewBox="0 0 35 10" fill="none"><path d="M15.1107 0H10.1259L0.954102 9.06122H5.93894L15.1107 0Z" fill="#eefb13"></path><path d="M24.7416 0H19.7567L10.585 9.06122H15.5698L24.7416 0Z" fill="#eefb13"></path><path d="M34.3724 0H29.3833L20.2158 9.06122H25.1964L34.3724 0Z" fill="#eefb13"></path></svg>
      <ul className="list-unstyled mb-0"></ul>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-5"><p>Copy@ 2024 NUTRI-TONE. All rights reserved </p></div>
    <div className="col-lg-3 ">   
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
    <div className="col-lg-4 text-end">
      <Link>Privacy policy</Link>
      <Link>Terms & Condition</Link>
    </div>
  </div>
</div>
    </footer>
    
    </>
  )
}
