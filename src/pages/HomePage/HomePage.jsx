import { WelcomeInfo } from "../../components/WelcomeInfo/WelcomeInfo";
import { WelcomeSection } from "./HomePage.styled";
import map from "../../images/map.png";
import car from "../../images/car_home.png";
import { Container } from "../../components/Container/Container.styled";

const HomePage = () => {
  return (
    <Container>
      <WelcomeSection backgroundImageMap={map} backgroundImageCar={car}>
        <WelcomeInfo />;
      </WelcomeSection>
    </Container>
  );
};

export default HomePage;
