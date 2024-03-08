import { StyledLogoImg } from "./Logo.styled";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/home">
      <StyledLogoImg src={logo} />
    </Link>
  );
};
