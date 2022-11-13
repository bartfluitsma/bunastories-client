import { NavLink } from "react-router-dom";
import { navItems as data } from "../../data";

const MenuItems = () => {
    return ( 
        <div className="grid grid-cols-2 lg:block xl:grid">
        {data.map((navItem, idx) => (
          <NavLink key={idx} to={navItem.menuLink}>
            <span className="mb-4 block font-light text-base hover:underline">
              {navItem.menuTitle}
            </span>
          </NavLink>
        ))}
      </div>
     );
}
 
export default MenuItems;