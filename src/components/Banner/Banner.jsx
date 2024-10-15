import { Link } from "react-router-dom";
import Overlay from "../Overlay/Overlay";
import { useTranslation } from "react-i18next";

export default function Banner({ title , image  }) {
  const { t } = useTranslation();
  return (
 <>
<section
  className="banner gradient-bg bg-cover shadow dark text-light text-center position-relative text-capitalize"
  style={{
    backgroundImage: `url(${image})`,
  }}
>
  <Overlay />
  <div className="container position-relative">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <h1>{title}</h1>
        <ul className="breadcrumb d-block d-flex justify-content-center align-items-center mt-4">
          <li >
            <Link to="/" > 
              <i className="fa-solid fa-house-chimney me-1 "></i> {t("banner.home")}
            </Link>
          </li>
          <li className="active">
            <i className="fas fa-angle-right mx-2"></i>{title}
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


 </>
  )
}
