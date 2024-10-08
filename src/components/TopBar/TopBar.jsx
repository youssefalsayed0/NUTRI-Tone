export default function TopBar() {
  return (
    <>
      <section className=" top-bar bg-black py-2 px-md-5 px-0 ">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="box d-flex align-items-center ">
                <div className="d-flex align-items-center">
                  <i className="fa-regular fa-envelope me-2 "></i>
                  <a
                    href="mailto:official.nutritone@gmail.com"
                    className="me-5 pe-5 border-1 border-end"
                  >
                   official.nutritone@gmail.com
                  </a>
                </div>

                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-phone  me-2 "></i>
                  <a
                    href="tel:+2001069796878"
                    className="me-5 pe-5 border-1 border-end"
                  >
                    01069796878
                  </a>
                </div>

                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-location-dot me-2 "></i>
                  <a  className="me-5">
                    soon
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2  justify-content-end d-flex ">
              <div className="social-icons d-flex   align-items-center">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
