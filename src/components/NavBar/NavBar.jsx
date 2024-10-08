import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.webp"
export default function NavBar() {
  return (
    <>
      <nav className="navbar p-0  ps-md-5  text-white bg-black ">
        <div className="container-fluid p-0">
          <Link className="navbar-brand " >
          <img src={logo} alt="logo"  className="img-fluid " width={120}/>
          </Link>

          {/* Navbar links visible on all screen sizes */}
          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-xl-flex flex-row nav-1 d-none text-uppercase ">
              <li className="nav-item me-5">
                <NavLink to="/home" className="nav-link  text-white" activeClassName="active"  >
                  Home
                </NavLink>
              </li>
              <li className="nav-item  me-5 ">
                <NavLink to="/about-us" className="nav-link text-white"  activeClassName="active">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item  me-5 ">
                <NavLink to="/services" className="nav-link text-white" activeClassName="active" >
                  Services
                </NavLink>
              </li>
              <li className="nav-item me-5 ">
                <NavLink to="/test" className="nav-link text-white"  activeClassName="active">
                  test
                </NavLink>
              </li>
              <li className="nav-item  ">
                <NavLink to="/contact-us" className="nav-link text-white"  activeClassName="active">
                  Contact
                </NavLink>
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
            className="offcanvas offcanvas-end bg-black"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
            
              <i className="fa-solid fa-x ms-auto text-white " type="button" data-bs-dismiss="offcanvas"
                aria-label="Close"></i>
            
            </div>
            <div className="offcanvas-body px-4">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 d-xl-none">
                <li className="nav-item">
                  <NavLink className="nav-link active"  activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active">
                    Link
                  </NavLink>
                </li>
              </ul>
              <div className="d-none d-xl-block text-white">
            < div className="image">
                <img src={logo} alt="logo"  className="img-fluid" width={130}/>
            </ div >
            <p className="text-white-50 mt-4">We’re a team of creatives who are excited about unique ideas and help fin-tech companies to create amazing identity by crafting top-notch UI/UX.</p>
            <div className="heading">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="10" viewBox="0 0 35 10" fill="none"><path d="M15.1107 0H10.1259L0.954102 9.06122H5.93894L15.1107 0Z" fill="#eefb13"></path><path d="M24.7416 0H19.7567L10.585 9.06122H15.5698L24.7416 0Z" fill="#eefb13"></path><path d="M34.3724 0H29.3833L20.2158 9.06122H25.1964L34.3724 0Z" fill="#eefb13"></path></svg>
              <h6 className="text-uppercase">contact us</h6>
            </div>
            <div className="heading">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="10" viewBox="0 0 35 10" fill="none"><path d="M15.1107 0H10.1259L0.954102 9.06122H5.93894L15.1107 0Z" fill="#eefb13"></path><path d="M24.7416 0H19.7567L10.585 9.06122H15.5698L24.7416 0Z" fill="#eefb13"></path><path d="M34.3724 0H29.3833L20.2158 9.06122H25.1964L34.3724 0Z" fill="#eefb13"></path></svg>
              <h6 className="text-uppercase">stay connected</h6>
            </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
