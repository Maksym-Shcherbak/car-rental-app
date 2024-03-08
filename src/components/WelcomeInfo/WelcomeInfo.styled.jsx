import { Link } from "react-router-dom";
import styled from "styled-components";

export const WelcomeInfoContainer = styled.div`
  max-width: 800px;
  padding: 21px 10px;
  text-align: left;
`;

export const WelcomeInfoTitle = styled.h1`
  margin-bottom: 20px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 56px;
  line-height: 1.2;
  color: #595959;
`;

export const WelcomeInfoText = styled.p`
  max-width: 600px;
  margin-bottom: 60px;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.2;
  color: #737373;
`;

export const WelcomeInfoLink = styled(Link)`
  border-radius: 12px;
  padding: 16px 50px;
  background: #3470ff;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
`;
