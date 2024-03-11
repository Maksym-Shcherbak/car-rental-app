import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    padding-left: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-right: 128px;
    padding-left: 128px;
  }
`;
