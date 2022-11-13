import Barista from "../../assets/images/barista-preparing-a-coffee.png";
import DrinkingCoffee from "../../assets/images/girl-drinking-a-cup-of-coffee.png";
import Pouring from "../../assets/images/barista-pouring-in-foam-in-a-cup-for-a-cappucino.png";
import Button from "../Button.tsx";
import useMediaQuery from "../../helpers/breakpoints";

const photosClass = `rounded-3xl p-2 md:w-full `;

const AboutIntro = () => {
  const isBreakpoint = useMediaQuery(1000);

  return (
    <>
      <div className="py-24">
        <div className="sidePadding sm:flex md:items-center">
          {isBreakpoint ? (
            <div className="m-auto -mx-2 flex max-w-md items-center justify-center sm:m-auto sm:mr-10 sm:w-2/5 md:w-2/5">
              <div className="w-1/2">
                <img
                  src={Barista}
                  alt="Barista preparing a coffee"
                  className={photosClass}
                />
                <img
                  src={DrinkingCoffee}
                  alt="Girl drinking a cup of specialty coffee"
                  className={photosClass}
                />
              </div>
              <div className="w-1/2">
                <img
                  src={Pouring}
                  alt="Barista pouring foam in a cappucino cup."
                  className={photosClass}
                />
              </div>
            </div>
          ) : (
            <div className="mt-20 grid w-1/2 grid-cols-3 pr-4">
              <img
                src={Barista}
                alt="Barista preparing a coffee"
                className={photosClass}
              />
              <div className="-mt-20">
                <img
                  src={Pouring}
                  alt="Barista pouring foam in a cappucino cup."
                  className={photosClass}
                />
              </div>
              <img
                src={DrinkingCoffee}
                alt="Girl drinking a cup of specialty coffee"
                className={photosClass}
              />
            </div>
          )}
          <div className="mt-10 sm:w-3/4 md:w-1/2 md:pr-20 lg:ml-10 xl:ml-32">
            <h3>
              Buna<span className="text-xs">&#8226;</span>stories
            </h3>
            <p className="mb-4 -mt-1 italic text-sm">
              Buna; translates to 'coffee' in Amharic (Eth.)
            </p>
            <p className="mb-6">
              We’re passionate about coffee, and if you’re anything like us, you
              know speciality coffee is the way to go! So we made it our mission
              to help you find an amazing cup of coffee, no matter where you
              are.
            </p>
            <Button link="/about" btnStyle="secondaryBtn">
              About us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutIntro;
