import Button from "../Button";
import ImageTwoColumns from "../ImageTwoColumns";
import SubHeader from "../SubHeader";
import CoffeeRoasting from "../../assets/images/roasting-specialty-coffee-beans.png";
import TwoColumns from "../TwoColumns";

const WhySpecialtyCoffee = () => {
  return (
    <section className="bg-lightColor">
      <TwoColumns>
        <ImageTwoColumns
          noMargin={true}
          alt="Roasting specialty coffee beans"
          src={CoffeeRoasting}
        ></ImageTwoColumns>
        <div className="mt-10 md:mt-0">
          <SubHeader>Only the best</SubHeader>
          <h2 className="mb-4 text-darkColor">Why specialty coffee</h2>
          <p className="mb-8 mr-10">
            Specialty coffee is known for direct trading, improving the pay and
            conditions for the farmers. It also stimulates sustainable ways of
            farming, - and only the finest are selected, it highly improves the
            taste! Improving the conditions for the farmers, impact on the
            planet and
          </p>
          <div className="flex flex-wrap md:justify-start">
            <Button link="/listing" btnStyle="primaryBtn">
              Find a coffee
            </Button>
            <Button link="/about" btnStyle="ghostBtn ml-4">
              Learn more
            </Button>
          </div>
        </div>
      </TwoColumns>
    </section>
  );
};

export default WhySpecialtyCoffee;
