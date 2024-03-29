import { Link, StyledNav } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/favorites">Favorites</Link>
    </StyledNav>
  );
};
