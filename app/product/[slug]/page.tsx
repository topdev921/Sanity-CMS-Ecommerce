import { getSingleProductData } from "@/app/api/sanity/route";
import AddToCartButton from "@/components/AddToCartButton";
import ProductCarousel from "@/components/ProductCarousel";
import ShopByCategory from "@/components/ShopByCategory";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formatCurrency";
import { urlFor } from "@/lib/sanity";
import { ProductPageProps } from "@/types";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const productData: ProductPageProps = await getSingleProductData(params.slug);
  return (
    <section className="pt-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
        <div className="flex flex-col">
          <h2 className="font-bold text-3xl sm:text-4xl">{productData.name}</h2>
          <p className="font-bold text-lg text-[#A2A2A2]">
            {productData.categoryName}
          </p>
        </div>
        <div className="flex items-end justify-between">
          <p className="font-bold text-lg">
            {formatCurrency(productData.price)}
          </p>
          <AddToCartButton
            name={productData.name}
            categoryName={productData.categoryName}
            image={productData.images[0]}
            currency="GBP"
            price={productData.price}
            price_id={productData.price_id}
          />
        </div>
        <Image
          src={urlFor(productData.images[0]).url()}
          alt={productData.name}
          width={1795}
          height={1800}
        />
        <Image
          src={urlFor(productData.images[1]).url()}
          alt={productData.name}
          width={1795}
          height={1800}
        />
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="product_description">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>{productData.description}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="terms_&_conditions">
            <AccordionTrigger>Terms & Conditions</AccordionTrigger>
            <AccordionContent>
              All purchases are made in GBP, other currency rates shown should
              only be used as an estimate. Prices include GBP for UK orders and
              will be removed in checkout for international orders. We ship
              worldwide; please continue to the checkout for exact shipping
              rates!
              <br />
              <br />
              Please take the time to read and agree to the terms and conditions
              of Up There for online purchases. If you are unclear or unsure
              about anything, please contact us before placing an order. We are
              always happy to help with your queries.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 px-4 py-32">
        <h3 className="font-bold text-2xl text-center max-w-2xl">
          Tell us what you think.
        </h3>
        <Link href={"/all"}>
          <Button className="flex items-center gap-1.5 text-foreground font-bold ring-1 ring-foreground bg-transparent rounded-full px-6 py-5 hover:bg-foreground hover:text-background">
            Write A Review <ArrowRightIcon />
          </Button>
        </Link>
      </div>
      <ProductCarousel
        title="You might also like"
        productId={productData._id}
      />
      <ShopByCategory />
    </section>
  );
}
