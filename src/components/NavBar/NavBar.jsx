import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.webp"
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

export default function NavBar() {
  const navbarRef = useRef(null);
  const offcanvasRef = useRef(null); // Reference for offcanvas
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Handle opening/closing of off-canvas
  const closeOffcanvas = () => {
    offcanvasRef.current.classList.remove("show");
  };

  useEffect(() => {
    const navLinks = offcanvasRef.current.querySelectorAll(".navbar-link");
  
    const handleNavLinkClick = () => {
      closeOffcanvas(); 
    };

    navLinks.forEach((link) =>
      link.addEventListener("click", handleNavLinkClick)
    );

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleNavLinkClick)
      );
    };
  }, []);

  // Language switcher handler
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr"; // Set direction of the document
    localStorage.setItem("language", lng); // Save selected language
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en"; // Default to English if no language saved
    i18n.changeLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, [i18n]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;


      if (window.scrollY > 50) {
        navbar.classList.add( "nav-style" , );
  
      }
      else if (window.scrollY == 0){
        navbar.classList.remove("nav-style" ,);
       
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <nav ref={navbarRef} className="navbar p-0  ps-md-5  text-white bg-black fixed-top  ">
        <div className="container-fluid p-0">
          <Link className="navbar-brand " >
          <img src={logo} alt="logo"  className="img-fluid me-5 ms-3" width={70}/>
          </Link>

          {/* Navbar links visible on all screen sizes */}
          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-xl-flex flex-row nav-1 d-none text-uppercase ">
              <li className="nav-item me-5">
                <NavLink to="/" className="nav-link  text-white navbar-link" activeClassName="active"  >
                {t("nav.home")}
                </NavLink>
              </li>
              <li className="nav-item  me-5 ">
                <NavLink to="/about-us" className="nav-link text-white navbar-link"  activeClassName="active">
                {t("nav.about")}
                </NavLink>
              </li>
              <li className="nav-item me-5 ">
                <NavLink to="/Packages" className="nav-link text-white navbar-link"  activeClassName="active">
                {t("nav.packages")}
                </NavLink>
              </li>
              <li className="nav-item me-5 ">
                <NavLink to="/offers" className="nav-link text-white navbar-link"  activeClassName="active">
                {t("nav.offers")}
                </NavLink>
              </li>
              <li className="nav-item dropdown  me-5 position-relative">
                  <Link
                    className="nav-link dropdown-toggle text-white"
                    id="calcDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   {t("nav.calculates")}
                  </Link>
                  <ul
                    className="dropdown-menu  text-center w-auto position-absolute  bg-dark text-white " // Add "w-auto" for automatic width
                    aria-labelledby="calcDropdown"
                    style={{ minWidth: "80px" }} // Ensure the width fits content
                  >
                    <li>
                      <Link className="dropdown-item fw-semibold p-3 text-white">
                      {t("nav.dailyCalories")}  
                      </Link>
                    </li>
                    <hr />
                    <li>
                      <Link className="dropdown-item fw-semibold p-3 text-white">
                      {t("nav.caloriesHeartRate")}  
                      </Link>
                    </li>
                    <hr />
                    <li>
                      <Link className="dropdown-item fw-semibold p-3 text-white">
                      {t("nav.caloriesActivities")}    
                      </Link>
                    </li>
                    <hr />
                    <li>
                      <Link className="dropdown-item fw-semibold p-3 text-white">
                      {t("nav.bmiCalculator")}  
                      </Link>
                    </li>
                  
                  </ul>
                </li>
              <li className="nav-item  me-5 ">
                <NavLink to="/contact-us" className="nav-link text-white navbar-link"  activeClassName="active">
                {t("nav.contact")}
                </NavLink>
              </li>
                <li className="nav-item dropdown ">
                  <Link
                    className="nav-link dropdown-toggle text-white"
                    id="languageDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-globe me-2"></i>
                    {i18n.language === "ar" ? "AR" : "EN"}
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-end text-center w-auto position-absolute bg-dark text-white" // Add "w-auto" for automatic width
                    aria-labelledby="languageDropdown"
                    style={{ minWidth: "80px" }} // Ensure the width fits content
                  >
                    <li>
                      <span
                        className="dropdown-item text-white"
                        onClick={() => handleLanguageChange("en")}
                            type="button"
                      >
                        En
                      </span>
                    </li>
                    <hr />
                    <li>
                      <span
                        className="dropdown-item text-white"
                        onClick={() => handleLanguageChange("ar")}
                        type="button"
                      >
                        Ar
                      </span>
                    </li>
                  </ul>
                </li>
            </ul>

            {/* Toggler visible alongside links on all screens */}
            <div
              className=" menu__icon"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
                <span />
                <span />
                <span />
            </div>
          </div>

          {/* Offcanvas menu */}
          <div
          ref={offcanvasRef}
            className="offcanvas offcanvas-end bg-black"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"

          >
            <div className="offcanvas-header">
            <div className="image">
                <img src={logo} alt="logo"  className="img-fluid" width={80}/>
            </ div >
              <i className="fa-solid fa-x ms-auto me-4 text-white " type="button" data-bs-dismiss="offcanvas"
                aria-label="Close"></i>
            
            </div>
            <div className="offcanvas-body px-4">
              
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 d-xl-none h-100 d-flex align-items-center justify-content-center">
                <li className="nav-item">
                  <NavLink to="/home" className="nav-link  navbar-link text-white"  activeClassName="active">
                {t("nav.home")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about-us" className="nav-link navbar-link text-white" activeClassName="active">
                  {t("nav.about")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" className="nav-link navbar-link text-white" activeClassName="active">
                  {t("nav.packages")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/offers" className="nav-link navbar-link text-white" activeClassName="active">
                    {t("nav.offers")}
                  </NavLink>
                </li>
                <li className="nav-item dropdown   position-relative">
                  <Link
                    className="nav-link dropdown-toggle text-white"
                    id="calcDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   {t("nav.calculates")}
                  </Link>
                  <ul
                    className="dropdown-menu  text-center w-auto   bg-dark text-white " // Add "w-auto" for automatic width
                    aria-labelledby="calcDropdown"
                    style={{ minWidth: "80px" }} // Ensure the width fits content
                  >
                    <li>
                      <Link className="dropdown-item fw-semibold p-3 text-white">
                      {t("nav.dailyCalories")}  
                      </Link>
                    </li>
                    <hr />
                    <li>
                      <Link className="dropdown-item fw-semibold p-3 text-white">
                      {t("nav.caloriesHeartRate")}  
                      </Link>
                    </li>
                    <hr />
                    <li>
                      <Link className="dropdown-item fw-semibold p-3 text-white">
                      {t("nav.caloriesActivities")}    
                      </Link>
                    </li>
                    <hr />
                    <li>
                      <Link className="dropdown-item fw-semibold p-3 text-white">
                      {t("nav.bmiCalculator")}  
                      </Link>
                    </li>
                  
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact-us" className="nav-link navbar-link text-white" activeClassName="active">
                  {t("nav.contact")}
                  </NavLink>
                </li>
                <li className="nav-item dropdown ">
                  <Link
                    className="nav-link dropdown-toggle text-white"
                    id="languageDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-globe me-2"></i>
                    {i18n.language === "ar" ? "AR" : "EN"}
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-end text-center w-auto  bg-dark text-white" // Add "w-auto" for automatic width
                    aria-labelledby="languageDropdown"
                    style={{ minWidth: "80px" }} // Ensure the width fits content
                  >
                    <li>
                      <span
                        className="dropdown-item text-white"
                        onClick={() => handleLanguageChange("en")}
                            type="button"
                      >
                        En
                      </span>
                    </li>
                    <hr />
                    <li>
                      <span
                        className="dropdown-item text-white"
                        onClick={() => handleLanguageChange("ar")}
                        type="button"
                      >
                        Ar
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="d-none d-xl-block text-white">
            <p className="text-white-50 mt-4">{t("nav.desc")}</p>
            <div className=" mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="10" viewBox="0 0 35 10" fill="none"><path d="M15.1107 0H10.1259L0.954102 9.06122H5.93894L15.1107 0Z" fill="#eefb13"></path><path d="M24.7416 0H19.7567L10.585 9.06122H15.5698L24.7416 0Z" fill="#eefb13"></path><path d="M34.3724 0H29.3833L20.2158 9.06122H25.1964L34.3724 0Z" fill="#eefb13"></path></svg>
              <h6 className="text-uppercase">{t("nav.contact")}</h6>
       <div className=" mt-5">
               <a href="tel:+201069796878"  className="d-flex  link">
               <span className="icon">
                   <i className="fa-solid fa-phone fa-lg"></i> 
               </span>
               <div className="box">
                 <p className="title">  {t("nav.phone")}</p>
                 <p className="data">01069796878</p>
               </div>
               </a>

               <a href="mailto:official.nutritone@gmail.com"  className="d-flex link">
               <span className="icon">
                   <i className="fa-regular fa-envelope fa-lg"></i> 
               </span>
               <div className="box">
                 <p className="title">  {t("nav.email")}</p>
                 <p className="data">official.nutritone@gmail.com</p>
               </div>
               </a>

               <a className="d-flex link">
               <span className="icon">
                   <i className="fa-solid fa-location-dot fa-lg"></i> 
               </span>
               <div className="box">
                 <p className="title">  {t("nav.address")}</p>
                 <p className="data">  {t("nav.soon")}</p>
               </div>
               </a>
       </div>
            </div>
            <div className="mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="10" viewBox="0 0 35 10" fill="none"><path d="M15.1107 0H10.1259L0.954102 9.06122H5.93894L15.1107 0Z" fill="#eefb13"></path><path d="M24.7416 0H19.7567L10.585 9.06122H15.5698L24.7416 0Z" fill="#eefb13"></path><path d="M34.3724 0H29.3833L20.2158 9.06122H25.1964L34.3724 0Z" fill="#eefb13"></path></svg>
              <h6 className="text-uppercase">  {t("nav.stayConnected")}</h6>
              <div className=" d-flex text-white-50 mt-4 ms-3 ">
              <div className="social-icons d-flex   align-items-center">
                <a href="https://www.facebook.com/NUTRITONE1/ " target="_blank">
                    <i className="fa-brands fa-facebook-f fa-lg me-4" />
                </a>
                <a href="https://www.instagram.com/nutri_tone/"  target="_blank">
                    <i className="fa-brands fa-instagram fa-lg me-4" />
                </a>
               <a href="https://www.youtube.com/channel/UC-Ro9sXpKXdFjau5ww1dkRQ"  target="_blank">
                   <i className="fa-brands fa-youtube fa-lg me-4" />
               </a>
           <a href="https://www.tiktok.com/@nutri.tone?lang=en_official?lang=en"  target="_blank">
                   <i className="fa-brands fa-tiktok fa-lg " />
           </a>
              </div>
            </div>
            </div>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
