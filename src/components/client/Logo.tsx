import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../../store";

const Logo = () => {
  const $isMenuOpen = useStore(isMenuOpen);
  const [logoClass, setLogoClass] = useState("inherit");

  useEffect(() => {
    let timeoutId: number;

    if ($isMenuOpen) {
      timeoutId = setTimeout(() => {
        setLogoClass("z-50");
      }, 400);
    } else {
      setLogoClass("inherit");
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [$isMenuOpen]);

  return (
    <img className={logoClass} src="/images/logo.png" alt="Vetekso Logo" />
  );
};

export default Logo;
