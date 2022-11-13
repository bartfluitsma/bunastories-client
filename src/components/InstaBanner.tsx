import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FakeDataInstaImages as data } from "../data";

const InstaBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          swipeToSlide: true,
          autoplay: false,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: false,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          swipeToSlide: true,
          arrows: false,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="text-center mb-16">
        <h4> Follow us!</h4>
        <p>
          <a
            href="http://instagram.com/bunastories"
            target="_blank"
            rel="noopener noreferrer"
          >
            @bunastories
          </a>
        </p>
        <div className="my-4">
          <Slider {...settings}>
            {(data &&
              data.map((image, idx) => {
                return (
                  <img
                    key={idx}
                    src={require("../assets/images/" + image.imgSrc + ".png")}
                    alt={image.imgAlt}
                  />
                );
              })) || <p>Loading images...</p>}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default InstaBanner;
