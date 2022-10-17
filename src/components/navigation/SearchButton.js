import { useEffect, useRef, useState } from "react";
import useMediaQuery from "../../helpers/breakpoints";
import { ReactComponent as SearchIcon } from "../../images/icons/search-icon.svg";
import SearchBar from "./Searchbar";

const SearchButton = () => {
  const [style, setStyle] = useState(true);
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setStyle(true);
    }
  };

  const changeStyle = () => setStyle(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const isBreakpoint = useMediaQuery(600);

  return (
    <>
        
    <div className={!style && isBreakpoint   ? 'absolute left-0 top-0 m-0 -my-4 -ml-[4vw] h-[100vh] w-[100vw] bg-lightGreyColor bg-opacity-70 p-0' : ''} >
    <div ref={myRef}>
        {style ? (
        <button
          onClick={changeStyle}
          className="m-2 mr-0 grid h-[48px] w-[48px] cursor-pointer place-items-center rounded-[50%] bg-primaryColor shadow-softShadow"
          >
          <SearchIcon />
        </button>
      ) : !isBreakpoint ? (
        <SearchBar />
      ) : (
          <SearchBar />
          )}
        </div>  
          </div>
    </>
  );
};

export default SearchButton;
