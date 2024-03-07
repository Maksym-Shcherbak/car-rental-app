import styled from "styled-components";

export const GridItem = styled.li`
  border-radius: 14px;
`;

export const ImageWrapper = styled.div`
  border-radius: 14px;
  max-width: 274px;
  height: 268px;
  margin-bottom: 14px;
  overflow: hidden;
  pointer-events: none;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const AdvertInfo = styled.div`
  margin-botttom: 28px;
`;

export const TitleAndPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const AdvertTitle = styled.h3`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;

export const AdvertPrice = styled.h3`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;

export const AdvertButton = styled.button`
  border-radius: 12px;
  padding: 12px 99px;
  background: #3470ff;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
`;
