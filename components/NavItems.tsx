"use client";

import { HandleAuth } from "@/app/api/auth/handleAuth";
import { NavItemsProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MenuAside from "./MenuAside";
import ToCart from "./ToCart";

export default function NavItems({ category, session }: NavItemsProps) {
  const [navbarStyle, setNavbarStyle] = useState("text-background");
  const [navbarBackground, setNavbarBackground] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setNavbarStyle("text-background");
    } else {
      setNavbarStyle("text-foreground");
    }
  }, [pathname]);

  useEffect(() => {
    const changeNavbarBackground = () => {
      if (window.scrollY >= 48) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };
    window.addEventListener("scroll", changeNavbarBackground);
  }, []);
  return (
    <nav
      className={`flex items-center justify-between px-4 h-12 ${navbarStyle} ${
        navbarBackground
          ? "bg-background text-foreground"
          : "bg-transparent text-background"
      } transition-all`}
    >
      <Link href={"/"}>
        <h1 className={`font-extrabold text-xl`}>BOUNCE.</h1>
      </Link>
      <div className="font-bold text-sm flex gap-24">
        <div className="hidden sm:block space-x-4">
          <Link href={"/All"}>Shop</Link>
          {category.map((category) => (
            <Link key={category.name} href={`/${category.name}`}>
              {category.name}
            </Link>
          ))}
        </div>
        <div className="hidden sm:block space-x-4">
          <HandleAuth session={session} />
          <ToCart />
        </div>
        <MenuAside category={category} session={session} />
      </div>
    </nav>
  );
}
