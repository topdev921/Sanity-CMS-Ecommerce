import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";

interface InfiniteCarouselProps {
  name: string;
  slug: string;
}

export default function InfiniteCarousel({
  name,
  slug,
}: InfiniteCarouselProps) {
  return (
    <div className="slideContainer absolute top-1/2 bottom-1/2 translate-y-1/2 flex z-10">
      {Array.from(new Array(12)).map((_, i) => (
        <div className="slide whitespace-nowrap flex" key={i}>
          <p className="flex items-center justify-center font-bold text-background text-3xl md:text-5xl">
            {name}
            <span className="px-8">
              <Link href={`/product/${slug}`}>
                <Button className="flex items-center gap-1.5 text-background font-bold ring-1 ring-background bg-transparent rounded-full px-6 py-5 hover:bg-background hover:text-foreground">
                  Shop Now <ArrowRightIcon />
                </Button>
              </Link>
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
