import Carousel from "../Carousel";

const blogArticlesFakeData = [
  {
    title: "How to brew the perfect cup?",
    subTitle: "Brewing",
    imgSrc: "v60-manual-brew-specialty-coffee.png",
    imgAlt: "",
    link: "#",
  },
  {
    title: "How to make the perfect cappucino?",
    subTitle: "Brewing",
    imgSrc: "pouring-milk-foam-in-cup-of-coffee.png",
    imgAlt: "",
    link: "#",
  },
  {
    title: "What is specialty coffee?",
    subTitle: "Learn",
    imgSrc: "specialty-coffee-brewing-method.png",
    imgAlt: "",
    link: "#",
  },
];

const LatestBlogSection = () => {
  return (
    <>
      <div className="py-24">
        <div className="sidePadding">
          <h3>The latest</h3>
          <p>Learn all about the beauty of specialty coffee.</p>
          <Carousel data={blogArticlesFakeData} />
        </div>
      </div>
    </>
  );
};

export default LatestBlogSection;

// create a carousel with slick?
// create carousel card
// map out the cards
