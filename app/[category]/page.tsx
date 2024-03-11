import ProductCard from "@/components/ProductCard";
import { ProductProps } from "@/types";
import { getCategoryData, getProductData } from "../api/sanity/sanity";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categoryPage: ProductProps[] = await getCategoryData(params.category);
  const products: ProductProps[] = await getProductData();
  return (
    <section className="pt-32">
      <h3 className="font-bold text-4xl md:text-6xl flex justify-center px-4 pb-8">
        {params.category}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
        {(params.category === "All" ? products : categoryPage).map(
          (product) => (
            <ProductCard
              key={product._id}
              slug={product.slug}
              imageUrl1={product.imageUrl1}
              imageUrl2={product.imageUrl2}
              price={product.price}
              name={product.name}
              categoryName={product.categoryName}
            />
          )
        )}
      </div>
    </section>
  );
}
