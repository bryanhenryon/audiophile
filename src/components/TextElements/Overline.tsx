import clsx from "clsx";
import { ReactNode } from "react";
import "./textElements.css";

type OverlineProps = {
  color: string;
  children?: ReactNode;
};

export const Overline = ({
  color,
  children = "New Product",
}: OverlineProps): JSX.Element => {
  const customClass = clsx({
    "overline--orange": color === "orange",
    "overline--white": color === "white",
  });

  return <p className={`overline ${customClass}`}>{children}</p>;
};

export default Overline;
