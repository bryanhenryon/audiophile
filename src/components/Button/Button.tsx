import clsx from "clsx";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./button.css";

type ButtonProps = {
  linkTo?: string;
  children: ReactNode;
  backgroundColor: string;
  onClick?: () => void;
  style?: object;
};

export const Button = ({
  linkTo = "#",
  children,
  backgroundColor,
  ...rest
}: ButtonProps): JSX.Element => {
  const customClass = clsx({
    "btn--orange": backgroundColor === "orange",
    "btn--outline": backgroundColor === "outline",
    "btn--black": backgroundColor === "black",
  });

  return (
    <Link to={linkTo} className={`btn ${customClass}`} {...rest}>
      {children}
    </Link>
  );
};

export default Button;
