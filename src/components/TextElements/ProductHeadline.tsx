import { ReactNode } from "react";

type ProductHeadlineProps = {
  maxWidth?: string;
  color?: string;
  children?: ReactNode;
};

export const ProductHeadline = ({
  maxWidth = "445px",
  color = "#000000",
  children,
}: ProductHeadlineProps): JSX.Element => {
  const styles: any = {
    maxWidth,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "44px",
    color,
    letterSpacing: "1.42857px",
    textTransform: "uppercase",
  };

  return <h2 style={styles}>{children}</h2>;
};

export default ProductHeadline;
