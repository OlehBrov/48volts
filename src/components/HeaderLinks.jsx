"use client";

import Link from "next/link";
import { useState } from "react";
import { IconsMapper } from "./IconsMapper";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { HoverCardArrow } from "@radix-ui/react-hover-card";
import { useRouter } from "next/navigation";

export const HeaderLinks = () => {
  const router = useRouter();
  return (
    <>
      <ul className="hidden md:flex items-center gap-4 mx-auto">
        <div className="">
          <HoverCard openDelay={0}>
            <HoverCardTrigger asChild>
              <Button
                variant="link"
                className="text-xl h-full hover:no-underline border-2 border-transparent  hover:text-blue-400 transition-all duration-300"
              >
                Батареї
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-screen">
              <HoverCardArrow width={30} height={20} className="fill-white " />
              <div className="flex justify-center space-x-4">
                <ul className="flex gap-4 p-5">
                  <li key="batteries py-2">
                    <Link
                      href={"/categories/1"}
                      className="text-nowrap flex gap-4 items-center border-r-2 pr-3 transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:border-r-blue-400"
                    >
                      <IconsMapper
                        params={{
                          name: "header_batteries",
                          width: 60,
                          height: 60,
                        }}
                      />
                      Аккумулятори
                    </Link>
                  </li>
                  <li key="cells">
                    <Link
                      href={"/categories/2"}
                      className="text-nowrap flex gap-4 items-center border-r-2 pr-3 transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:border-r-blue-400"
                    >
                      <IconsMapper
                        params={{ name: "header_cells", width: 60, height: 60 }}
                      />
                      Аккумуляторні елементи
                    </Link>
                  </li>
                  <li key="bms">
                    <Link
                      href={"/categories/3"}
                      className="text-nowrap flex gap-4 items-center border-r-2 pr-3 transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:border-r-blue-400"
                    >
                      <IconsMapper
                        params={{ name: "header_bms", width: 60, height: 60 }}
                      />
                      BMS-плати
                    </Link>
                  </li>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="">
          <HoverCard openDelay={0}>
            <HoverCardTrigger asChild>
              <Button variant="link" className="text-xl hover:no-underline hover:text-blue-400">
                Запчастини
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-screen">
              <HoverCardArrow width={30} height={20} className="fill-white" />
              <div className="flex justify-center space-x-4">
                <ul className="flex gap-4 p-5 ">
                  <li key="chargers">
                    <Link
                      href={"/categories/4"}
                     className="text-nowrap flex gap-4 items-center border-r-2 pr-3 transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:border-r-blue-400"
                    >
                      <IconsMapper
                        params={{
                          name: "header_chargers",
                          width: 60,
                          height: 60,
                        }}
                      />
                      Зарядні пристрої
                    </Link>
                  </li>
                  <li key="cases">
                    <Link
                      href={"/categories/5"}
                      className="text-nowrap flex gap-4 items-center border-r-2 pr-3 transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:border-r-blue-400"
                    >
                      <IconsMapper
                        params={{ name: "header_cases", width: 60, height: 60 }}
                      />
                      Корпуси і кейси
                    </Link>
                  </li>
                  <li key="cables">
                    <Link
                      href={"/categories/7"}
                      className="text-nowrap flex gap-4 items-center border-r-2 pr-3 transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:border-r-blue-400"
                    >
                      <IconsMapper
                        params={{
                          name: "header_cables",
                          width: 60,
                          height: 60,
                        }}
                      />{" "}
                      Кабелі
                    </Link>
                  </li>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <Button
          variant="link"
          className="text-xl hover:no-underline hover:text-blue-400"
          onClick={() => router.push("/about")}
        >
          Про нас
        </Button>
      </ul>
    </>
  );
};
