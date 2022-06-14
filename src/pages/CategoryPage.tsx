import { useParams } from "react-router-dom";
import { Product } from "../models/Product";
import products from "../products.json";
import {
  CategoryBanner,
  ProductCard,
  CategoryCards,
  ShopIntro,
} from "../components";

export const CategoryPage = (): JSX.Element => {
  const params = useParams();

  // @ts-ignore
  const category = products[params.category!];

  return (
    <>
      <CategoryBanner title={params.category!} />
      <div className="container">
        {category.map((product: Product) => (
          <ProductCard
            key={product.id}
            linkTo={`/${params.category}/${product.name.split(` `).join(`-`)}`}
            product={product}
          />
        ))}
        <CategoryCards style={{ marginTop: "0", marginBottom: "0" }} />
        <ShopIntro />
      </div>
    </>
  );
};

export default CategoryPage;
