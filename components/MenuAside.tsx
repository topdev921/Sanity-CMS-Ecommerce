import { HandleAuth } from "@/app/api/auth/handleAuth";
import { NavItemsProps } from "@/types";
import Link from "next/link";
import ToCart from "./ToCart";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

export default function MenuAside({ category, session }: NavItemsProps) {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden">Menu</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription className="pt-8">
            <div className="flex flex-col items-start justify-start">
              <Link href={"/All"}>Shop</Link>
              <Separator />
              {category.map((category) => (
                <div key={category.name} className="w-full">
                  <Link href={`/${category.name}`}>{category.name}</Link>
                  <Separator />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start justify-start pt-48">
              <HandleAuth session={session} />
              <Separator />
              <ToCart />
              <Separator />
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
