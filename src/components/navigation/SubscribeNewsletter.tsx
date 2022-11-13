import Button from "components/Button";

const SubscribeNewsletter = () => {
    return ( 
        <div className="mt-6 md:col-span-2 md:mt-0 md:ml-10 lg:max-w-md">
        <div className="mb-3">
          <h5>Stay updated!</h5>
          <p>We inform about new cities, promotions & cool articles.</p>
        </div>
        <form
          action="submit"
          className="mr-2 flex w-full items-center justify-between rounded-[55px] bg-white p-2 py-2"
        >
          <input
            className="w-[inherit] border-none py-[11px] pl-2 focus:outline-none"
            type="text"
            name=""
            id=""
            placeholder="email address"
          />
          <Button btnStyle={"primaryBtn"} onClick={''} link={''}>Subscribe</Button>
        </form>
      </div>
     );
}
 
export default SubscribeNewsletter;