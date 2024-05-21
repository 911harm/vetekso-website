import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../store";
import MenuIcon from "./icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon";

const IconButton = () => {
  const $isMenuOpen = useStore(isMenuOpen);

  return (
    <button
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
      data-collapse-toggle="navbar-default"
      type="button"
      aria-controls="navbar-default"
      aria-expanded="false"
      onClick={() => isMenuOpen.set(!$isMenuOpen)}
    >
      {$isMenuOpen ? (
        <CloseIcon iconClass={$isMenuOpen ? "z-50" : ""} />
      ) : (
        <MenuIcon />
      )}
    </button>
  );
};

export default IconButton;
