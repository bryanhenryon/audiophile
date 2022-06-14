import { Product } from "../models/Product";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../products.json";
import {
  ProductCard,
  CategoryCards,
  Paragraph,
  ShopIntro,
  ProductGallery,
  Recommendation,
  Accessories,
} from "../components";

type ProductDetailPageProps = {
  onProductAdd: (product: Product) => void;
  onProductQuantityChange: (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
  quantity: number;
};

export default function ProductDetailPage({
  onProductAdd,
  onProductQuantityChange,
  quantity,
}: ProductDetailPageProps) {
  const params = useParams();

  // @ts-ignore
  const category = products[params.category];
  const productName = params.product;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const currentProduct = category.find(
      (product: Product) => product.name.split(" ").join("-") === productName
    );
    setProduct(currentProduct);
  }, [category, productName]);

  return (
    <div className="container--productDetail">
      {product && (
        <>
          <ProductCard
            product={product}
            detailPage={true}
            onProductAdd={onProductAdd}
            onProductQuantityChange={onProductQuantityChange}
            quantity={quantity}
          />
          <h3 className="productDetail__features--headline">Features</h3>
          <div className="productDetail__features">
            <Paragraph maxWidth={"635px"} margin={"0 0 0 0"}>
              {product.features}
            </Paragraph>
            <Accessories product={product}></Accessories>
          </div>
          <ProductGallery product={product} />
          <Recommendation />
          <CategoryCards style={{ marginTop: "0", marginBottom: "0" }} />
          <ShopIntro />
        </>
      )}
    </div>
  );
}
