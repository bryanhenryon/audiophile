import { ReactNode } from "react";

type ParagraphProps = {
  maxWidth?: string;
  color?: string;
  opacity?: string;
  margin?: string;
  children: ReactNode;
};

export const Paragraph = ({
  maxWidth = "unset",
  color = "#000000",
  opacity = "0.5",
  margin = "32px 0 0 0",
  children,
}: ParagraphProps): JSX.Element => {
  const styles = {
    maxWidth: maxWidth,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "25px",
    color: color,
    opacity: opacity,
    margin: margin,
  };

  return <p style={styles}>{children}</p>;
};

export default Paragraph;
