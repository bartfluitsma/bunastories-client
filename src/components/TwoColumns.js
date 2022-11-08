const TwoColumns = ({ children }) => {
  return (
    <div className="py-24">
      <div className="sidePadding md:grid md:grid-cols-2 md:items-center md:justify-between md:gap-10">
        {children}
      </div>
    </div>
  );
};

export default TwoColumns;
