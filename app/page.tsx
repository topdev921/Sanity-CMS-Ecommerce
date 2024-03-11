import CompanyPartners from "@/components/CompanyPartners";
import Masthead from "@/components/Masthead";
import ProductCarousel from "@/components/ProductCarousel";
import ShopByCategory from "@/components/ShopByCategory";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Masthead index={1} />
      <div className="flex flex-col items-center justify-center gap-8 px-4 py-32">
        <h3 className="font-bold text-xl sm:text-2xl text-center max-w-2xl">
          Bringing inspiration and innovation to every athlete around the globe.
        </h3>
        <Link href={"/All"}>
          <Button className="flex items-center gap-1.5 text-foreground font-bold ring-1 ring-foreground bg-transparent rounded-full px-6 py-5 hover:bg-foreground hover:text-background">
            Shop Now <ArrowRightIcon />
          </Button>
        </Link>
      </div>
      <ProductCarousel title="Latest Arrivals"/>
      <ShopByCategory />
      <CompanyPartners />
      <Masthead index={0} />
    </main>
  );
}
