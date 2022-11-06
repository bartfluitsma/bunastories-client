import CoffeePlaceImg from "../assets/images/specialty-coffee-place-with-woman-sitting-at-the-window.png";
import Button from "./Button";
import ImageTwoColumns from "./ImageTwoColumns";
import SubHeader from "./SubHeader";
import TextTwoColumns from "./TextTwoColumns";

const HowToSection = () => {
  return (
    <>
      <section className="body-font sidePadding bg-lightColor">
        <div className="container mx-auto flex flex-col items-center py-24 lg:m-0 lg:flex-row">
          <TextTwoColumns>
            <SubHeader>search 100+ places worldwide</SubHeader>
            <h2 className="mb-4 text-darkColor">
              Because good coffee deserves to be found
            </h2>
            <p className="mb-8 leading-relaxed">
              We selected the best specialty coffee places around the world,
              highlighting organic and fair-trade, so you don’t have to spend
              time to find an amazing cup of coffee!
            </p>
            <div className="flex flex-wrap justify-center md:justify-start">
              <Button link="/listing" btnStyle="primaryBtn">
                Discover places
              </Button>
              <Button link="/about" btnStyle="ghostBtn ml-4">
                Learn more
              </Button>
            </div>
          </TextTwoColumns>
          <ImageTwoColumns
            alt="Woman starting out of a window inside a specialty coffee place"
            src={CoffeePlaceImg}
          ></ImageTwoColumns>
        </div>
      </section>
    </>
  );
};

export default HowToSection;
