import { useStore } from "@nanostores/react";
import { NAV_LINKS, EN_NAV_LINKS } from "../../utils/consts";
import { isMenuOpen } from "../../store";

interface Props {
  currentPathname: string;
  locale?: string;
}

const NavMenu = ({ currentPathname, locale = "es" }: Props) => {
  const $isMenuOpen = useStore(isMenuOpen);
  const links = locale === "en" ? EN_NAV_LINKS : NAV_LINKS;

  const asideClass = $isMenuOpen
    ? "h-screen w-screen bg-black/60 backdrop-blur-sm z-40"
    : "w-0 bg-transparent z-[-1] pointer-events-none";
  const navClass = $isMenuOpen ? "" : "-translate-x-full";

  const handleCloseMenu = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      isMenuOpen.set(false);
    }
  };

  const homeHref = locale === "en" ? "/en" : "/";

  return (
    <aside
      className={`fixed inset-0 transition-all duration-300 ${asideClass}`}
      onClick={handleCloseMenu}
    >
      <nav
        className={`w-[260px] h-screen p-[38px] flex flex-col items-center gap-10 bg-[#030014]/95 border-r border-white/10 backdrop-blur-2xl md:hidden rounded-e-2xl transition-transform duration-500 shadow-2xl ${navClass}`}
        id="menu"
      >
        <a href={homeHref} onClick={() => isMenuOpen.set(false)}>
          <img
            className="w-[130px]"
            src="/images/logo-main.svg"
            alt="Vetekso Logo"
          />
        </a>
        <div className="w-full flex flex-col gap-6">
          {links.map(({ label, pathname }) => {
            const isActive =
              pathname === "/" || pathname === "/en"
                ? currentPathname === pathname
                : currentPathname.startsWith(pathname);

            return (
              <a
                key={label}
                href={pathname}
                onClick={() => isMenuOpen.set(false)}
                className={`${isActive ? "text-fuchsia-400 font-semibold" : "text-white/80"} text-lg py-2 border-b border-white/5 w-full text-center transition-colors duration-200 hover:text-fuchsia-400`}
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
