import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.webp"
export default function NavBar() {
  return (
    <>
      <nav className="navbar p-0  ps-md-5  text-white bg-dark ">
        <div className="container-fluid p-0">
          <Link className="navbar-brand" >
          <img src={logo} alt="logo"  className="img-fluid" width={120}/>
          </Link>

          {/* Navbar links visible on all screen sizes */}
          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-xl-flex flex-row nav-1 d-none px-5 ">
              <li className="nav-item me-4">
                <NavLink className="nav-link  text-white" aria-current="page" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item  me-4 ">
                <NavLink className="nav-link text-white" >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item  me-4 ">
                <NavLink className="nav-link text-white" >
                  Services
                </NavLink>
              </li>
              <li className="nav-item   me-4">
                <NavLink className="nav-link text-white" >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link text-white" >
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
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" href="#">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" href="#">
                    Link
                  </NavLink>
                </li>
         
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
