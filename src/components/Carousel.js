import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard";

const Carousel = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // dynamic
    slidesToScroll: 1, // dynamic
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // dynamic
          slidesToScroll: 1, // dynamic
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // dynamic
          slidesToScroll: 1, // dynamic
          dots: false,
          swipeToSlide: true,
          centerMode: true,
          centerPadding: "20px 0px 0px ",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // dynamic
          slidesToScroll: 1, // dynamic
          dots: false,
          swipeToSlide: true,
          arrows: true,
          centerMode: true,
          centerPadding: "20px 0px 0px ",
        },
      },
    ],
  };

  return (
    <div className="lg:-mx-4">
      <Slider {...settings}>
        {data.map((article, idx) => {
          return (
            <CarouselCard
              key={idx}
              imgSrc={require("../assets/images/" + article.imgSrc)}
              imgAlt={article.imgAlt}
              subTitle={article.subTitle}
              title={article.title}
              link={article.link}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
