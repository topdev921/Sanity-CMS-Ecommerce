import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CartContext from "@/context/CartContext";
import { NextAuthProvider } from "@/context/NextAuthProvider";

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bounce | Ecommerce",
  description:
    "An ecommerce website developed using Next.JS, Sanity CMS and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <NextAuthProvider>
          <CartContext>
            <Navbar />
            {children}
            <Footer />
          </CartContext>
        </NextAuthProvider>
      </body>
    </html>
  );
}
