import {
  AdvertButton,
  AdvertInfo,
  AdvertPrice,
  AdvertTitle,
  CarImage,
  GridItem,
  ImageWrapper,
  TitleAndPriceWrapper,
} from "./AdvertsListItem.styled";

export const AdvertListItem = ({ src, make, year, price }) => {
  return (
    <GridItem>
      <ImageWrapper>
        <CarImage src={src} />
      </ImageWrapper>
      <AdvertInfo>
        <TitleAndPriceWrapper>
          <AdvertTitle>
            {make}, {year}
          </AdvertTitle>
          <AdvertPrice>{price}</AdvertPrice>
        </TitleAndPriceWrapper>
        <AdvertButton>Learn more</AdvertButton>
      </AdvertInfo>
    </GridItem>
  );
};
