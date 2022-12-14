import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems as data } from "../../data";

const MenuButton = () => {
  // change style of menu on click
  const [style, setStyle] = useState(true);
  const changeStyle = () => {
    setStyle(!style);
  };

  return (
    <>
      <div className="relative ml-2 w-fit">
        <div>
          <button
            onClick={changeStyle}
            onKeyDown={changeStyle}
            className="m-2 mr-0 grid h-[48px] w-[48px] cursor-pointer place-items-center rounded-[50%] bg-lightColor shadow-softShadow"
          >
            <div>
              <div
                className={
                  style
                    ? "h-[2px] w-[27px] rounded-xl bg-darkColor transition-transform duration-100 ease-in"
                    : "h-[2px] w-[27px] origin-center translate-y-[6px] rotate-45 rounded-xl bg-darkColor transition-transform duration-100 ease-in"
                }
              ></div>
              <div
                className={
                  style
                    ? "my-[4px] h-[2px] w-[27px] rounded-xl bg-darkColor transition-colors duration-100 ease-out"
                    : "my-[4px] h-[2px] w-[27px] rounded-xl transition-colors duration-100 ease-out "
                }
              ></div>
              <div
                className={
                  style
                    ? "h-[2px] w-[27px] rounded-xl bg-darkColor transition-transform duration-100 ease-in"
                    : "h-[2px] w-[27px] origin-center -translate-y-[6px] -rotate-45 rounded-xl bg-darkColor transition-transform duration-100 ease-in"
                }
              ></div>
            </div>
          </button>
        </div>
        {!style ? (
          <div className="absolute right-0 min-w-[200px] rounded-xl bg-[white] py-4 px-5 shadow-softShadow">
            {data.map((navItem, idx) => (
              <NavLink key={idx} to={navItem.menuLink} onClick={changeStyle}>
                <span className="my-2 block text-base hover:underline">
                  {navItem.menuTitle}
                </span>
              </NavLink>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default MenuButton;
