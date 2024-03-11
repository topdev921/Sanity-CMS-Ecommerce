"use client";

import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export default function ToCart() {
  const { cartCount } = useShoppingCart();
  return <Link href={"/cart"}>Cart ({cartCount})</Link>;
}
