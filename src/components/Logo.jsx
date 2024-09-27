import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ alignment }) => {
  return (
    <Link
      href="/"
      className={cn("flex w-auto items-center", {
        "flex-col gap-5": alignment === "v",
      })}
    >
      <div className="flex w-30 h-24">
        <img src="/logo-removebg.png" className="w-full object-cover" />
      </div>

      <p className="font-bold text-4xl text-blue-600">48 Volts</p>
    </Link>
  );
};

export default Logo;
