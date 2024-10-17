import { Link } from "react-router-dom";


export default function CallToAction() {
  return (
    <>
    <section className="call py-5">
<div className="container ">
    <div className="row  py-5 px-2 px-lg-5 gy-3 gy-lg-0 text-black">
        <div className="col-lg-8">
          < div className="d-flex align-items-center" >
            <svg className="" xmlns="http://www.w3.org/2000/svg" width="60" height="30" viewBox="0 0 35 10" fill="none"><path d="M15.1107 0H10.1259L0.954102 9.06122H5.93894L15.1107 0Z" fill="black"></path><path d="M24.7416 0H19.7567L10.585 9.06122H15.5698L24.7416 0Z" fill="black"></path><path d="M34.3724 0H29.3833L20.2158 9.06122H25.1964L34.3724 0Z" fill="black"></path></svg>
            
              <p className="m-0 ms-2">GET TO KNOW ABOUT ALL THE EXCLUSIVE OFFERS
              </p>
          </ div >
            <h2>SUBSCRIBE TO NUTRI-TONE
            </h2>
        </div>
        <div className="col-lg-4 text-lg-end">
        <Link
                    type="button"
                    to="/contact"
                    className="main-btn rounded-0 text-uppercase position-relative "
                  >
              Subscribe
                  </Link>
                   
        </div>
    </div>
</div>
    </section>
    </>
  )
}
