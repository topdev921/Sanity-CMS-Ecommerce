"use client";

import { CartProvider } from "use-shopping-cart";

interface CartContextProps {
  children: React.ReactNode;
}

export default function CartContext({ children }: CartContextProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl={process.env.NEXTAUTH_URL as string}
      cancelUrl={process.env.NEXTAUTH_URL as string}
      currency="GBP"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
}
