import { StyledLogoImg } from "./Logo.styled";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <StyledLogoImg src={logo} />
    </Link>
  );
};
