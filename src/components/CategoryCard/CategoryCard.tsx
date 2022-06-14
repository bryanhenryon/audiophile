import { Link } from "react-router-dom";
import "./categoryCard.css";

type CategoryCardProps = {
  title: string;
  imagePath: string;
};

export const CategoryCard = ({
  title,
  imagePath,
}: CategoryCardProps): JSX.Element => (
  <div className="category-card">
    <img className="category-card__image" src={imagePath} alt="headphones" />
    <h6 className="category-card__title">{title}</h6>
    <div className="category-card__link-wrapper">
      <Link to={`/${title}`} className="category-card__link">
        Shop
      </Link>
      <img
        className="category-card__icon"
        src="/images/shared/desktop/icon-arrow-right.svg"
        alt="orange arrow right"
      />
    </div>
  </div>
);

export default CategoryCard;
