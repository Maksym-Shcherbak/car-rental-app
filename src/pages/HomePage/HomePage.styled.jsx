import styled from "styled-components";

export const MapImageWrapper = styled.div`
  max-width: 790px;
  margin-left: auto;
`;
export const CarImageWrapper = styled.div``;

export const WelcomeSection = styled.section`
  padding-top: 120px;
  padding-bottom: 175px;
  background-image: ${(props) => `url(${props.backgroundImageCar})`},
    ${(props) => `url(${props.backgroundImageMap})`};
  background-repeat: no-repeat;
  background-position: bottom right, top right;
`;
