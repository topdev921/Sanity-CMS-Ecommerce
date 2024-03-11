import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import InfiniteCarousel from "./InfiniteCarousel";
import { Button } from "./ui/button";
import { getMastheadData } from "@/app/api/sanity/sanity";

interface MastHeadProps {
  index: 0 | 1;
}

export default async function Masthead({ index }: MastHeadProps) {
  const masthead = await getMastheadData(index);
  return (
    <section
      className={`relative ${index === 1 && "-mt-12"} h-screen overflow-hidden`}
    >
      <InfiniteCarousel name={masthead.name} slug={masthead.productSlug} />
      <Image
        src={urlFor(masthead.image).url()}
        alt={masthead.name}
        width={3000}
        height={2250}
        priority
        quality={100}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute bottom-8 w-full flex items-center justify-between px-4">
        <p className="font-bold text-xs sm:text-sm text-background max-w-xs sm:max-w-sm">
          {masthead.imageDescription}
        </p>
        <Link href="/All">
          <Button className="hidden sm:flex items-center text-background font-bold ring-1 ring-background bg-transparent rounded-full px-6 py-5 hover:bg-background hover:text-foreground">
            Shop All
          </Button>
        </Link>
      </div>
    </section>
  );
}
