import { useStore } from "@nanostores/react";
import { NAV_LINKS } from "../utils/consts";
import { isMenuOpen } from "../store";

const NavMenu = () => {
  const $isMenuOpen = useStore(isMenuOpen);

  const navMenuClass = $isMenuOpen ? "" : "-translate-y-full";

  return (
    <div
      className={`w-screen h-screen absolute top-0 end-0 p-4 flex flex-col justify-center items-center gap-8 bg-black bg-opacity-90 transition-transform duration-500 md:hidden ${navMenuClass}`}
      id="menu"
    >
      {NAV_LINKS.map(({ label, pathname }) => (
        <a
          key={label}
          href={pathname}
          className="text-white text-xl transition-colors duration-200 hover:text-fuchsia-100"
        >
          {label}
        </a>
      ))}
    </div>
  );
};

export default NavMenu;

// <!-- <script>
//   import { isOpen } from "../store";

//   isOpen.subscribe((open) => {
//     const menu = document.getElementById("menu");

//     if (menu) {
//       if (open) {
//         menu.style.transform = "translateY(0)";
//       } else {
//         menu.style.transform = "translateY(-100vh)";
//       }
//     }
//   });
// </script> -->
