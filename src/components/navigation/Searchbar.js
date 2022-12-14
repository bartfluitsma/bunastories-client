import useMediaQuery from "../../helpers/breakpoints";
import { ReactComponent as SearchIcon } from "../../images/icons/search-icon.svg";

const SearchBar = () => {
  const isBreakpoint = useMediaQuery(600);

  return (
    <>
      <form
        action=""
        className={
          isBreakpoint
            ? "absolute right-0 mt-[100px] flex h-fit w-full flex-row justify-between rounded-[55px] px-4 shadow-softShadow"
            : "relative flex h-[55px] w-[25vw] min-w-[300px] flex-row justify-between rounded-[55px] shadow-softShadow"
        }
      >
        <input
          className="flex-grow-2 w-full rounded-[55px] border-none p-5 focus:outline-none"
          type="text"
          name=""
          id=""
          placeholder="Search cities"
        />
        {isBreakpoint ? (
          <button className="absolute right-0 mt-[5px] mr-[23px] grid h-[55px] w-[55px] place-items-center rounded-[45px] bg-primaryColor">
            <SearchIcon />
          </button>
        ) : (
          <button className="m-2 mr-0 grid h-[48px] w-[48px] cursor-pointer place-items-center rounded-[50%] bg-primaryColor shadow-softShadow">
            <SearchIcon />
          </button>
        )}
      </form>
    </>
  );
};

export default SearchBar;
