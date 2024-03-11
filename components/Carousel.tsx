"use client";

import { ProductIdProps, ProductProps } from "@/types";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

type CarouselProps = {
  products: ProductProps[];
} & ProductIdProps;

export default function Carousel({ products, productId }: CarouselProps) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // currently viewed product does not appear on the recommended
  useEffect(() => {
    const id = productId;
    const filtered = products.filter((product) => product._id !== id);
    setFilteredProducts(filtered);
  }, [products, productId]);
  return (
    <CarouselComponent>
      <CarouselContent>
        {filteredProducts.map((product) => (
          <CarouselItem
            key={product._id}
            className="max-w-[24rem] sm:max-w-[26rem] md:max-w-[28rem] lg:max-w-[32rem] xl:max-w-[34rem]"
          >
            <ProductCard
              slug={product.slug}
              imageUrl1={product.imageUrl1}
              imageUrl2={product.imageUrl2}
              price={product.price}
              name={product.name}
              categoryName={product.categoryName}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </CarouselComponent>
  );
}
