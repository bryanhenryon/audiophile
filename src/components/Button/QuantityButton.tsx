import { ReactNode } from "react";

type QuantityButtonProps = {
  onProductQuantityChange: (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
  quantity?: number;
  children?: ReactNode;
  style?: object;
};

export const QuantityButton = ({
  onProductQuantityChange,
  quantity = 1,
  children,
  ...rest
}: QuantityButtonProps): JSX.Element => (
  <div className="quantity-button">
    <p
      onClick={onProductQuantityChange}
      className="quantity-button--decrease"
      id="decrease"
      {...rest}
    >
      {" "}
      -{" "}
    </p>

    <p className="quantity-button__text">{children ? children : quantity}</p>

    <p
      onClick={onProductQuantityChange}
      className="quantity-button--increase"
      id="increase"
      {...rest}
    >
      {" "}
      +{" "}
    </p>
  </div>
);

export default QuantityButton;
