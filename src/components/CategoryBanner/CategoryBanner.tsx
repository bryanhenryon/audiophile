import "./categoryBanner.css";

type CategoryBannerProps = {
  title: string;
};

export const CategoryBanner = ({ title }: CategoryBannerProps): JSX.Element => (
  <div className="category-banner">
    <h2>{title}</h2>
  </div>
);

export default CategoryBanner;
