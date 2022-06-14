import { Link } from "react-router-dom";
import "./logo.css";

const Logo = (): JSX.Element => (
  <Link to="/">
    <img className="logo" src="/images/shared/logo.svg" alt="Logo" />
  </Link>
);

export default Logo;
