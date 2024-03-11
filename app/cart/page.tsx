"use client";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formatCurrency";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export default function Cart() {
  const session = useSession();

  const {
    cartCount,
    cartDetails,
    removeItem,
    incrementItem,
    decrementItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  async function handleCheckout(e: any) {
    e.preventDefault();
    try {
      if (session.data?.user) {
        await redirectToCheckout();
      } else {
        signIn("google");
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <section className="pt-32">
      <div className="flex flex-col items-center px-4">
        <h2 className="font-bold text-4xl md:text-6xl">Cart</h2>
        {cartCount === 0 ? (
          <div className="flex flex-col items-center justify-center gap-y-6 pt-12">
            <p className="font-bold text-sm">
              You don&apos;t have any items in your cart yet.
            </p>
            <Link href={"/"}>
              <Button className="text-foreground font-bold ring-1 ring-foreground bg-transparent rounded-full px-6 py-5 hover:bg-foreground hover:text-background">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="w-full max-w-screen-3xl grid grid-cols-2 md:grid-cols-3 gap-4 border-b border-[#A2A2A2] font-bold text-sm pt-12 pb-2">
              <h4>Item</h4>
              <h4 className="justify-self-center">Quantity</h4>
              <h4 className="hidden md:block justify-self-center">Price</h4>
            </div>
            {Object.values(cartDetails ?? {}).map((item) => (
              <div
                className="w-full max-w-screen-3xl grid grid-cols-2 md:grid-cols-3 gap-4 border-b border-[#A2A2A2] py-4"
                key={item.id}
              >
                <div className="flex flex-col gap-2">
                  <Image
                    src={item.image as string}
                    alt={item.name}
                    width={320}
                    height={320}
                  />
                  <div className="flex flex-col font-bold text-sm">
                    <p>{item.name}</p>
                    <span className="text-[#A2A2A2]">{item.categoryName}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start justify-self-center">
                  <div className="space-x-4">
                    <button onClick={() => decrementItem(item.id)}>-</button>
                    <span className="font-bold text-sm">{item.quantity}</span>
                    <button onClick={() => incrementItem(item.id)}>+</button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="font-bold text-sm text-[#A2A2A2] pt-2"
                  >
                    Remove
                  </button>
                </div>
                <div className="flex items-start justify-start md:justify-center">
                  <span className="font-bold text-sm">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                </div>
              </div>
            ))}
            <div className="w-full max-w-screen-3xl flex flex-col-reverse md:flex-row items-start justify-between gap-y-24 md:gap-y-0 pt-12">
              <Link
                href={"/"}
                className="font-bold text-sm flex items-center gap-2"
              >
                <ArrowLeftIcon /> Continue Shopping
              </Link>
              <div className="w-full md:w-auto flex flex-col items-start">
                <div className="w-full flex items-center justify-between md:gap-x-64 font-bold text-sm">
                  <p>Subtotal</p>
                  <span> {formatCurrency(Number(totalPrice))}</span>
                </div>
                <p className="font-bold text-sm text-[#A2A2A2] pt-4 pb-14">
                  Shipping and taxes calculated at checkout
                </p>
                <Button
                  onClick={handleCheckout}
                  className="text-foreground font-bold ring-1 ring-foreground bg-transparent rounded-full px-6 py-5 hover:bg-foreground hover:text-background"
                >
                  Proceed To Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
