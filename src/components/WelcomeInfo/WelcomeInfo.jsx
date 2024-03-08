import {
  WelcomeInfoContainer,
  WelcomeInfoLink,
  WelcomeInfoText,
  WelcomeInfoTitle,
} from "./WelcomeInfo.styled";

export const WelcomeInfo = () => {
  return (
    <WelcomeInfoContainer>
      <WelcomeInfoTitle>We Have Prepared a Car For Your Trip </WelcomeInfoTitle>
      <WelcomeInfoText>
        We have many types of cars that are ready for you to travel anywhere and
        anytime.
      </WelcomeInfoText>
      <WelcomeInfoLink to="/catalog">Get your car</WelcomeInfoLink>
    </WelcomeInfoContainer>
  );
};
