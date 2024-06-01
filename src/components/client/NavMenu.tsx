import { useStore } from "@nanostores/react";
import { NAV_LINKS } from "../../utils/consts";
import { isMenuOpen } from "../../store";

const NavMenu = ({ currentPathname }: { currentPathname: string }) => {
  const $isMenuOpen = useStore(isMenuOpen);
  const asideClass = $isMenuOpen
    ? "h-screen w-screen bg-translucent z-40"
    : "w-0 bg-transparent z-[-1]";
  const navClass = $isMenuOpen ? "" : "-translate-x-full";

  const handleCloseMenu = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      isMenuOpen.set(false);
    }
  };

  return (
    <aside
      className={`absolute top-0 start-0 transition-background delay-100 ${asideClass}`}
      onClick={handleCloseMenu}
    >
      <nav
        className={`w-[230px] h-screen p-[38px] flex flex-col items-center gap-8 bg-white md:hidden rounded-e-lg transition-transform duration-500 ${navClass}`}
        id="menu"
      >
        <a href="/">
        <img
          className={`w-[110px] h-[24px]`}
          src="/images/logo-menu-mobile.svg"
          alt="Vetekso Logo"
        />
        </a>
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
