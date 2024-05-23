import { NAV_LINKS } from "../../utils/consts";

const NavLinks = ({ currentPathname }: { currentPathname: string }) => {
  return (
    <div
      className="space-x-6 min-[800px]:space-x-8 w-full hidden md:block md:w-auto"
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
            className={`${isActive ? "text-fuchsia-100" : "text-white"} text-xl transition-colors duration-200 hover:text-fuchsia-100`}
          >
            {label}
          </a>
        );
      })}
    </div>
  );
};

export default NavLinks;
