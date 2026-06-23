import { NAV_LINKS, EN_NAV_LINKS } from "../../utils/consts";

interface Props {
  currentPathname: string;
  locale?: string;
}

const NavLinks = ({ currentPathname, locale = "es" }: Props) => {
  const links = locale === "en" ? EN_NAV_LINKS : NAV_LINKS;

  return (
    <div
      className="hidden md:flex items-center space-x-3 min-[850px]:space-x-6 lg:space-x-8 xl:space-x-10 w-full md:w-auto"
      id="navbar-default"
    >
      {links.map(({ label, pathname }) => {
        const isActive =
          pathname === "/" || pathname === "/en"
            ? currentPathname === pathname
            : currentPathname.startsWith(pathname);

        return (
          <a
            key={`NavLink-${label}`}
            href={pathname}
            className={`${isActive ? "text-fuchsia-400 font-semibold" : "text-white/80 hover:text-white"} text-sm min-[850px]:text-base font-medium transition-all duration-300 relative py-1 px-2 whitespace-nowrap`}
          >
            {label}
            {isActive && (
              <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-fuchsia-400 to-cyan-400 rounded-full animate-pulse" />
            )}
          </a>
        );
      })}
    </div>
  );
};

export default NavLinks;
