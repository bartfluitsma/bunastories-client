import { Link } from "react-router-dom";

const CarouselCard = ({ imgSrc, imgAlt, subTitle, title, link }) => {
  return (
    <div className="mr-8 py-4 lg:m-4">
      <Link to={link}>
        <img className="rounded-3xl" src={imgSrc} alt={imgAlt} />
        <div className="mx-4">
          <p className="my-2 font-medium text-primaryColor text-sm">
            {subTitle}
          </p>
          <h4>{title}</h4>
        </div>
      </Link>
    </div>
  );
};

export default CarouselCard;
