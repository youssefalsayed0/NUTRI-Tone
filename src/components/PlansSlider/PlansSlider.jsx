import Slider from "react-slick/lib/slider";
import img1 from "../../assets/images/obesity.webp";
import img2 from "../../assets/images/clinical.webp";
import img3 from "../../assets/images/kids.webp";
import img4 from "../../assets/images/preg.webp";
import img5 from "../../assets/images/sports.webp";
import img6 from "../../assets/images/family.webp";
import { Link } from "react-router-dom";
function PlanSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 1000,
    cssEase: "ease-in",

    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className=" py-5 plans-slider">
      <div className="container ">
        <div className="slider-container">
          <Slider {...settings}>
            <Link to="/Packages/package-details/obesity&underweight" className="image">
              <img src={img1} alt="package" className="img-fluid" />
            </Link>

            <Link to="/Packages/package-details/clinical-nutrition" className="image ">
              <img src={img2} alt="package" className="img-fluid" />
            </Link>

            <Link to="/Packages/package-details/kids-nutrition" className="image ">
              <img src={img3} alt="package" className="img-fluid" />
            </Link>

            <Link to="/Packages/package-details/pregnant&lactation-nutrition" className="image ">
              <img src={img4} alt="package" className="img-fluid" />
            </Link>

            <Link to="/Packages/package-details/sports-nutrition" className="image ">
              <img src={img5} alt="package" className="img-fluid" />
            </Link>

            <Link to="/Packages/package-details/family-care" className="image ">
              <img src={img6} alt="package" className="img-fluid" />
            </Link>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default PlanSlider;
