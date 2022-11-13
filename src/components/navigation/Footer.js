import InstaBanner from "../InstaBanner";
import NotListed from "./NotListed";
import MenuItems from "./MenuItems";
import SubscribeNewsletter from "./SubscribeNewsletter";

const Footer = () => {
  return (
    <>
      <div className="bg-lightColor py-24">
        <InstaBanner />
        <div className="sidePadding mt-10 md:grid md:gap-6 lg:grid-cols-[repeat(auto-fit,_minmax(150px,_auto))]">
          <NotListed />
          <div className="md:grid md:grid-cols-3 md:gap-5">
            <MenuItems />
            <SubscribeNewsletter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
