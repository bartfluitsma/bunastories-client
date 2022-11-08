import StepsToTakeCard from "../StepsToTakeCard";

const Steps = [
  {
    title: "Search a place",
    description:
      "For you, we’ve carefully handpicked only the best! You can’t go wrong.",
  },
  {
    title: "Get directions",
    description:
      "We link the navigation app you prefer to get the directions to the place you choose.",
  },
  {
    title: "Enjoy your coffee",
    description:
      "As soon as you arrive, order a coffee and experience the rich taste of real coffee.",
  },
];

const StepsToTake = () => {
  return (
    <div className="bg-lightColor pb-24">
      <div className="sidePadding lg:flex ">
        <div className="md:mb-3 lg:mr-10 lg:w-4/6">
          <h3>How to find a specialty coffee place near you</h3>
          <p className="lg:pr-8">
            We couldn’t have made it any easier for you to find a great coffee
            place close to you. Simply follow these steps!
          </p>
        </div>
        <div className="sm:flex lg:w-full">
          {" "}
          {Steps.map((step, idx) => {
            return (
              <StepsToTakeCard
                key={idx}
                title={step.title}
                idx={idx}
                desc={step.description}
              />
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
};

export default StepsToTake;
