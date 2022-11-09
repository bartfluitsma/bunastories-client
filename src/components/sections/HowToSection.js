import CoffeePlaceImg from "../../assets/images/specialty-coffee-place-with-woman-sitting-at-the-window.png";
import Button from "../Button";
import ImageTwoColumns from "../ImageTwoColumns";
import SubHeader from "../SubHeader";
import TwoColumns from "../TwoColumns";
import useMediaQuery from "../../helpers/breakpoints";

const HowToSection = () => {
  const isBreakpoint = useMediaQuery(900);

  return (
    <section className="bg-lightColor">
      <TwoColumns>
        <div className="mb-20 md:mb-0">
          <SubHeader>search 100+ places worldwide</SubHeader>
          <h2 className="mb-4 text-darkColor">
            Because good coffee deserves to be found
          </h2>
          <p className="mb-8 lg:mr-10">
            We selected the best specialty coffee places around the world,
            highlighting organic and fair-trade, so you don’t have to spend time
            to find an amazing cup of coffee!
          </p>
          <div className="flex flex-wrap justify-center md:justify-start">
            <Button link="/listing" btnStyle="primaryBtn">
              Discover places
            </Button>
            <Button link="/about" btnStyle="ghostBtn ml-4">
              Learn more
            </Button>
          </div>
        </div>
        <ImageTwoColumns
          noMargin={isBreakpoint ? true : false}
          alt="Woman starting out of a window inside a specialty coffee place"
          src={CoffeePlaceImg}
        ></ImageTwoColumns>
      </TwoColumns>
    </section>
  );
};

export default HowToSection;
