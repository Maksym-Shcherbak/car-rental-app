import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/modalSlice";
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
  const dispatch = useDispatch();
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
        <AdvertButton onClick={() => dispatch(openModal())}>
          Learn more
        </AdvertButton>
      </AdvertInfo>
    </GridItem>
  );
};
