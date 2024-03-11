import { client } from "@/lib/sanity";

export async function getMastheadData(index: number) {
  const query = `*[_type == "masthead"][${index}] {
    name,
    image,
    imageDescription,
    "productSlug": product->slug.current,
  }`;

  const data = await client.fetch(query);

  return data;
}

export async function getCategoryName() {
  const query = `*[_type == "category"]`;

  const data = await client.fetch(query);

  return data;
}

export async function getProductData() {
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

export async function getSingleProductData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
    images,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    price_id
  }`;

  const data = await client.fetch(query);

  return data;
}

export async function getCategoryData(category: string) {
  const query = `*[_type == "product" && category->name == "${category}"][0...4]{
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

export async function getNavigationcardData() {
  const query = `*[_type == "navigationCard"] {
    image,
    "categoryName": category->name,
  }`;

  const data = await client.fetch(query);

  return data;
}

export async function getCompanyLogo() {
  const query = `*[_type == "companyLogo"]{
    logo,
  }`;

  const data = await client.fetch(query);

  return data;
}
