const StepsToTakeCard = ({ title, idx, desc }) => {
  return (
    <div className='max-w-[280px] md:max-w-none my-6 lg:my-0 md:pr-4 md:last-of-type:pr-0 sm:px-[10px] md:px-0'>
      <span
        className={`grid h-[50px] w-[50px] place-items-center bg-red-spot bg-cover my-2`}
      >
        <p className="pl-1 font-semibold text-white">{idx + 1}</p>
      </span>
      <h4 className='text-base'>{title}</h4>
      <p className='text-sm'>{desc}</p>
    </div>
  );
};

export default StepsToTakeCard;
