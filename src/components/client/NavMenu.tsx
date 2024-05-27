import { useStore } from "@nanostores/react";
import { NAV_LINKS } from "../../utils/consts";
import { isMenuOpen } from "../../store";

const NavMenu = ({ currentPathname }: { currentPathname: string }) => {
  const $isMenuOpen = useStore(isMenuOpen);
  const asideClass = $isMenuOpen
    ? "h-screen w-screen bg-shadow-2 z-40"
    : "bg-transparent z-[-1]";
  const navClass = $isMenuOpen ? "" : "-translate-x-full";

  return (
    <aside
      className={`absolute top-0 start-0 transition-background duration-500 ${asideClass}`}
    >
      <nav
        className={`w-[230px] h-screen p-[38px] flex flex-col items-center gap-8 bg-white md:hidden rounded-e-lg transition-transform duration-500 ${navClass}`}
        id="menu"
      >
        <img
          className={`w-[110px] h-[24px]`}
          src="/images/logo-menu.png"
          alt="Vetekso Logo"
        />
        <div className="w-full flex flex-col gap-8">
          {NAV_LINKS.map(({ label, pathname }) => {
            const isActive =
              pathname === "/"
                ? currentPathname === pathname
                : currentPathname.includes(pathname.substring(1));

            return (
              <a
                key={label}
                href={pathname}
                className={`${isActive ? "text-fuchsia-100" : "text-blue-500"} text-xl transition-colors duration-200 hover:text-fuchsia-100`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default NavMenu;
