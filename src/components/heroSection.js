import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <>
      <div className="grid h-screen w-full place-items-end bg-hero-pattern-mobile bg-cover bg-center bg-no-repeat  shadow-[inset_0_0_0_1000px_rgba(0,0,0,0.32)] sm:bg-hero-pattern-desktop">
        <div className="mb-[10vh] text-center text-lightColor sm:max-w-[70vw] md:max-w-[60vw] lg:max-w-[50vw] m-auto">
          <p className="uppercase text-sm">Bunastories</p>
          <h1>Find a specialty coffee nearby</h1>
          <p className='max-w-[350px] xl:max-w-md m-auto'>
            A selection of the finest coffee places in the world, all at your
            fingertips.
          </p>
          <div className="my-4 grid place-items-center">
            <Button link="/listing" btnStyle="primaryBtn">
              Discover places
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
