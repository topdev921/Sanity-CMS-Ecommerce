"use client";

import { urlFor } from "@/lib/sanity";
import { ProductCartItemsProps } from "@/types";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";

export default function AddToCartButton({
  name,
  categoryName,
  price,
  currency,
  image,
  price_id,
}: ProductCartItemsProps) {
  const { addItem } = useShoppingCart();
  const product = {
    name: name,
    categoryName: categoryName,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: price_id,
  };
  return (
    <Button
      className="flex items-center text-foreground font-bold ring-1 ring-foreground bg-transparent rounded-full px-6 py-5 hover:bg-foreground hover:text-background"
      onClick={() => {
        addItem(product);
      }}
    >
      Add To Bag
    </Button>
  );
}
