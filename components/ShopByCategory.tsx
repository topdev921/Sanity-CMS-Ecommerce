import { getNavigationcardData } from "@/app/api/sanity/route";
import { urlFor } from "@/lib/sanity";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function ShopByCategory() {
  const navigationCard = await getNavigationcardData();
  return (
    <section className="flex flex-col items-center justify-center gap-24 px-4 pt-48">
      <h3 className="font-bold text-xl sm:text-2xl text-center max-w-2xl">
        Keeping athletes at the centre of everything we do, driven by a purpose
        to leave an impact.
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="relative">
          <Image
            src={urlFor(navigationCard[0].image).url()}
            alt={navigationCard[0].categoryName}
            width={3200}
            height={3815}
            priority
            className="w-full h-[46rem] lg:h-full object-cover"
          />
          <Link href={`/${navigationCard[0].categoryName}`}>
            <Button className="absolute top-8 left-8 flex items-center gap-1.5 text-background font-bold ring-1 ring-background bg-transparent rounded-full px-6 py-5 hover:bg-background hover:text-foreground">
              Shop {navigationCard[0].categoryName} <ArrowRightIcon />
            </Button>
          </Link>
        </div>
        <div className="relative">
          <Image
            src={urlFor(navigationCard[1].image).url()}
            alt={navigationCard[1].categoryName}
            width={3200}
            height={3815}
            priority
            className="w-full h-[46rem] lg:h-full object-cover"
          />
          <Link href={`/${navigationCard[1].categoryName}`}>
            <Button className="absolute top-8 left-8 flex items-center gap-1.5 text-background font-bold ring-1 ring-background bg-transparent rounded-full px-6 py-5 hover:bg-background hover:text-foreground">
              Shop {navigationCard[1].categoryName} <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
