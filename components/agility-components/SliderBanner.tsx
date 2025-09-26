import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/images/banner1.jpg" alt="Banner 1" />
      </div>
      <div>
        <img src="/images/banner2.jpg" alt="Banner 2" />
      </div>
    </Slider>
  );
}
