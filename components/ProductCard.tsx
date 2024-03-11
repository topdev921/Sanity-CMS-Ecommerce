import { formatCurrency } from "@/lib/formatCurrency";
import { ProductProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  slug,
  imageUrl1,
  imageUrl2,
  name,
  price,
  categoryName,
}: ProductProps) {
  return (
    <Link href={`/product/${slug}`}>
      <div className="relative">
        <Image
          src={imageUrl2}
          alt={name}
          width={1795}
          height={1800}
          className="object-cover w-full h-full"
        />
        <Image
          src={imageUrl1}
          alt={name}
          width={1795}
          height={1800}
          className="absolute top-0 left-0 hover:opacity-0 transition-opacity object-cover w-full h-full"
        />
      </div>
      <div className="flex items-start justify-between pt-2 font-bold text-sm">
        <div>
          <h3>{name}</h3>
          <p className="text-[#A2A2A2]">{categoryName}</p>
        </div>
        <p>{formatCurrency(price)}</p>
      </div>
    </Link>
  );
}
