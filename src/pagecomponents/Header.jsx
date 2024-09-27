import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import SearchInput from "./SearchInput";
import MobileMenu from "./MobileMenu";
import { CartIcon } from "@/components/CartIcon";
import Logo from "@/components/Logo";
import { HeaderLinks } from "@/components/HeaderLinks";

const Header = () => {
  return (
    <header className="py-3 md:py-5 bg-slate-600 relative">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center">
          <nav className="flex w-full">
            <Logo/>
           <HeaderLinks/>
          </nav>
          <CartIcon/>
          <div className="hidden md:flex">
            <SearchInput />
          </div>
          <div className="flex md:hidden">
            <MobileMenu />
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
