const ImageTwoColumns = ({ alt, src, noMargin }) => {
  return (
    <>
      <div className={`${noMargin ? "m-0" : "m-auto"} max-w-lg lg:max-w-xl`}>
        <img
          className="rounded-3xl object-cover object-center"
          alt={alt}
          src={src}
        />
      </div>
    </>
  );
};

export default ImageTwoColumns;
