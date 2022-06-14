import CategoryCard from "../CategoryCard/CategoryCard";
import "./categoryCards.css";

type CategoryCardsProps = {
  style?: object;
};

export const CategoryCards = ({ style }: CategoryCardsProps): JSX.Element => (
  <div style={style} className="category-cards">
    <CategoryCard
      title="headphones"
      imagePath="/images/shared/desktop/image-category-thumbnail-headphones.png"
    />
    <CategoryCard
      title="speakers"
      imagePath="/images/shared/desktop/image-category-thumbnail-speakers.png"
    />
    <CategoryCard
      title="earphones"
      imagePath="/images/shared/desktop/image-category-thumbnail-earphones.png"
    />
  </div>
);

export default CategoryCards;
