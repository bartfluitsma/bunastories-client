import logo from "../../images/icons/logo-bunastories.svg";

const NotListed = () => {
    return ( 
        <div className=" mt-4 mb-10 items-center sm:flex lg:max-w-md">
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
     );
}
 
export default NotListed;