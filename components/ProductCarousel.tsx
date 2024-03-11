import { ProductIdProps, ProductProps } from "@/types";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Carousel from "./Carousel";
import { client } from "@/lib/sanity";

type ProductCarouselProps = {
  title: string;
} & ProductIdProps;

async function getProductData() {
  const query = `*[_type == "product"][0...8] | order(_updatedAt asc) {
    _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl1": images[0].asset->url,
    "imageUrl2": images[1].asset->url,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProductCarousel({
  title,
  productId,
}: ProductCarouselProps) {
  const products: ProductProps[] = await getProductData();
  return (
    <section>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 pb-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <Link
          href={"/All"}
          className="flex items-center gap-2 hover:text-[#A2A2A2] transition-colors"
        >
          <p className="font-bold text-sm">Shop All Models</p>
          <ArrowRightIcon />
        </Link>
      </div>
      <Carousel products={products} productId={productId} />
    </section>
  );
}
