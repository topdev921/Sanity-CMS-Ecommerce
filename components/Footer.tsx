import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer className="pt-32 pb-6 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 lg:gap-0 font-bold text-sm text-foreground">
        <ul className="flex flex-col leading-tight order-2 lg:order-1">
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>Store & Stockist</Link>
          <Link href={"/"}>Wholesale</Link>
        </ul>
        <ul className="flex flex-col leading-tight order-3 lg:order-2">
          <Link href={"/"}>Shipping & Returns</Link>
          <Link href={"/"}>Terms & Conditions</Link>
          <Link href={"/"}>Care Instructions</Link>
        </ul>
        <ul className="flex flex-col leading-tight order-4 lg:order-3">
          <Link href={"/"}>Payment Methods</Link>
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Sustainability</Link>
        </ul>
        <div className="border-b border-[#A2A2A2] space-y-2 order-1 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1 lg:order-4">
          <p>Stay Up To Date With Our Newsletter</p>
          <div className="flex items-center">
            <Input placeholder="Enter Your Email Address" />
            <button type="submit">
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2 font-bold text-sm text-[#A2A2A2] pt-12">
        <span>All Rights Reserved</span>
        <span>&copy;2024</span>
        <Link
          href={"mailto:hamzak1738@gmail.com"}
          className="flex items-center"
        >
          Email <ArrowTopRightIcon />
        </Link>
        <div className="flex gap-4">
          <Link href={"/"}>GitHub</Link>
          <Link href={"/"}>LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
