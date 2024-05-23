import { useStore } from "@nanostores/react";
import { NAV_LINKS } from "../../utils/consts";
import { isMenuOpen } from "../../store";

const NavMenu = ({ currentPathname }: { currentPathname: string }) => {
  const $isMenuOpen = useStore(isMenuOpen);
  const navMenuClass = $isMenuOpen ? "" : "-translate-y-full";

  return (
    <div
      className={`w-screen h-screen absolute top-0 end-0 p-4 flex flex-col justify-center items-center gap-8 bg-black bg-opacity-95 transition-transform duration-500 md:hidden ${navMenuClass}`}
      id="menu"
    >
      {NAV_LINKS.map(({ label, pathname }) => {
        const isActive =
          pathname === "/"
            ? currentPathname === pathname
            : currentPathname.includes(pathname.substring(1));

        return (
          <a
            key={label}
            href={pathname}
            className={`${isActive ? "text-fuchsia-100" : "text-white"} text-xl transition-colors duration-200 hover:text-fuchsia-100`}
          >
            {label}
          </a>
        );
      })}
    </div>
  );
};

export default NavMenu;
