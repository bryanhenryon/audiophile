export interface Accessories {
  name: string;
  quantity: number;
}

export interface Product {
  id: number;
  name: string;
  shortName: string;
  category: string;
  price_id: string;
  price: number;
  quantity: number;
  image: {
    category: string;
    product: string;
    productTablet: string;
    productMobile: string;
    cart: string;
    galleryDesktop1: string;
    galleryTablet1: string;
    galleryMobile1: string;
    galleryDesktop2: string;
    galleryTablet2: string;
    galleryMobile2: string;
    galleryDesktop3: string;
    galleryTablet3: string;
    galleryMobile3: string;
  };
  description: string;
  features: string;
  accessories: Accessories[];
}
