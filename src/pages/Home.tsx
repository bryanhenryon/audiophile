import {
  ShopIntro,
  CategoryCards,
  HomeBanner,
  ProductGrid,
} from "../components";

export const Home = (): JSX.Element => (
  <>
    <HomeBanner />
    <div className="container">
      <CategoryCards style={{ marginTop: "175px", marginBottom: "168px" }} />
      <ProductGrid />
      <ShopIntro />
    </div>
  </>
);

export default Home;
