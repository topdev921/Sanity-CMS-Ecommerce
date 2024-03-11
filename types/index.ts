export interface ProductProps {
  _id?: string;
  imageUrl1: string;
  imageUrl2: string;
  price: number;
  name: string;
  categoryName: string;
  slug: string;
}

export type ProductIdProps = {
  productId?: string;
};

export interface ProductPageProps {
  _id?: string;
  images: string;
  price: number;
  name: string;
  categoryName: string;
  slug: string;
  description: string;
  price_id: string;
}

export interface ProductCartItemsProps {
  name: string;
  categoryName: string;
  price: number;
  currency: string;
  image: string;
  price_id: string;
}

export interface CategoryNameProps {
  name: string;
}

export interface CompanyLogoProps {
  logo: string;
}

export type HandleAuthProps = {
  session: any;
};

export type NavItemsProps = {
  category: CategoryNameProps[];
} & HandleAuthProps;
