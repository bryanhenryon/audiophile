import { Product } from "../../models/Product";
import "./accessories.css";

type AccessoriesProps = {
  product: Product;
};

export const Accessories = ({ product }: AccessoriesProps): JSX.Element => (
  <div className="accessories">
    <h3 className="accessories__title">In the box</h3>

    <div>
      {product.accessories?.map((accessory, index) => (
        <div key={index} className="accessories__element">
          <p className="accessories__quantity">{accessory.quantity}</p>
          <p className="accessories__name">{accessory.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Accessories;
