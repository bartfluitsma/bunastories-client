import { NavLink } from "react-router-dom";
import { navItems as data } from "../../data";
import InstaBanner from "../InstaBanner";
import logo from "../../images/icons/logo-bunastories.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-lightColor py-24">
        <InstaBanner />
        <div className="sidePadding mt-10 md:grid md:grid-cols-5 md:gap-4">
          <div className="col-span-2 mt-4 mb-10 items-center sm:flex">
            <img
              className="my-4 mr-4 h-[55px] w-[55px]"
              src={logo}
              alt="Logo bunastories"
            />
            <div>
              <h5>Is your city/coffee place not listed?</h5>
              <p>
                Oh no! Stay calm, take a coffee, and send a message to
                hello@bunastories.coffee
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            {data.map((navItem, idx) => (
              <NavLink key={idx} to={navItem.menuLink}>
                <span className="mb-4 block font-light text-base hover:underline">
                  {navItem.menuTitle}
                </span>
              </NavLink>
            ))}
          </div>
          <div className="col-span-2">email thing</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
