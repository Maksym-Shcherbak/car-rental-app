import { Container } from "../Container/Container.styled";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Header, HeaderContainer } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <HeaderContainer>
          <Logo />
          <Navigation />
        </HeaderContainer>
      </Container>
    </Header>
  );
};
