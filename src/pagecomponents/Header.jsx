import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import SearchInput from "./SearchInput";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="py-3 md:py-5 bg-slate-600 relative">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center">
          <nav className="flex w-full">
            <Link href="/" className="flex w-auto items-center">
              <div className="flex w-30 h-12">
                <img src="/logo-removebg.png" className="w-full object-cover" />
              </div>

              <p className="font-bold text-4xl text-blue-600">48 Volts</p>
            </Link>
            <ul className="hidden md:flex items-center gap-4 mx-auto">
              <Link href="/battaries">Батареї</Link>
              <Link href="/spare">Додаткові замчастини</Link>
              <Link href="/about">Про нас</Link>
            </ul>
          </nav>
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
