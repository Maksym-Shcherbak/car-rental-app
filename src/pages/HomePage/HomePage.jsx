import { WelcomeInfo } from "../../components/WelcomeInfo/WelcomeInfo";
import { WelcomeSection } from "./HomePage.styled";
import map from "../../images/map.png";
import car from "../../images/car_home.png";

const HomePage = () => {
  return (
    <WelcomeSection backgroundImageMap={map} backgroundImageCar={car}>
      <WelcomeInfo />;
    </WelcomeSection>
  );
};

export default HomePage;
