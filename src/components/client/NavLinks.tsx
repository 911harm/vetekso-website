import { NAV_LINKS } from "../../utils/consts";

const NavLinks = ({ currentPathname }: { currentPathname: string }) => {
  return (
    <div
      className="space-x-6 min-[800px]:space-x-10 w-full hidden md:block md:w-auto"
      id="navbar-default"
    >
      {NAV_LINKS.map(({ label, pathname }) => {
        const isActive =
          pathname === "/"
            ? currentPathname === pathname
            : currentPathname.includes(pathname.substring(1));

        return (
          <a
            key={`NavLink-${label}`}
            href={pathname}
            className={`${isActive ? "text-fuchsia-400 font-semibold" : "text-white/80 hover:text-white"} text-base font-medium transition-all duration-300 relative py-1 px-2`}
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
