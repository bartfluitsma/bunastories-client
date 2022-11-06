const TextTwoColumns = ({ children }) => {
  return (
    <>
      <div className="mb-16 flex flex-col items-center text-center lg:mb-0 lg:w-2/3 lg:flex-grow lg:items-start lg:pr-24 lg:text-left">
        {children}
      </div>
    </>
  );
};

export default TextTwoColumns;
