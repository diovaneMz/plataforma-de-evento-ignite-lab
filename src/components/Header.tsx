import { List } from "phosphor-react";
import { Logo,  } from "./Logo";

interface HeaderProps {
  isMenuActive: boolean;
  setIsMenuActive: Function;
}

export function Header({isMenuActive, setIsMenuActive} : HeaderProps) {
  return (
    <header className="relative w-full py-5 flex item-center justify-between bg-gray-700 border-b border-gray-600 lg:justify-center">
      <div className="ml-2">
        <Logo />
      </div>

      <div className="mr-2  lg:hidden" onClick={() => isMenuActive ? (setIsMenuActive(false)) : (setIsMenuActive(true))}>
        <List size={32} />
      </div>
    </header>
  );
}
