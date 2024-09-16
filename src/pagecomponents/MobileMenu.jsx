"use client";

import { Button } from "@/components/ui/button";
import { Icon, Menu, X } from "lucide-react";
import { burger } from "@lucide/lab";
import React, { useRef, useState } from "react";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <Button onClick={handleMenuToggle}>
        <Menu />
      </Button>
      <div
        ref={menuRef}
        className={cn(
          "fixed top-0 right-0 left-0 bottom-0 w-screen h-screen bg-slate-600 flex flex-col items-center p-4 transition-all",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Button className="ml-auto mr-0" onClick={handleMenuToggle}>
          <X />
        </Button>
        <Link href="/" className="flex w-auto items-center mb-16">
          <div className="flex w-30 h-12">
            <img src="/logo-removebg.png" className="w-full object-cover" />
          </div>

          <p className="font-bold text-4xl text-blue-600">48 Volts</p>
        </Link>
        <ul className="flex flex-col items-center gap-4 mx-auto mb-16">
          <Link href="/battaries">Батареї</Link>
          <Link href="/spare">Додаткові замчастини</Link>
          <Link href="/about">Про нас</Link>
        </ul>

        <SearchInput />
      </div>
    </div>
  );
};

export default MobileMenu;
