const ImageTwoColumns = ({ alt, src }) => {
  return (
    <>
      <div className="w-auto lg:w-2/3 xl:w-auto">
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
